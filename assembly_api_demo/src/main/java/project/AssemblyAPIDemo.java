package project;

import io.github.cdimascio.dotenv.Dotenv;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;

import com.google.gson.Gson;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AssemblyAPIDemo {

    private static String jsonOutput;
    private static final Logger logs = LoggerFactory.getLogger(AssemblyAPIDemo.class); //added logs just for practice

    public static void main(String[] args) throws Exception {

        String maximius = "https://bit.ly/MaximusAssembly"; //added bit.lys to make links more manageable, really long before
        String deathTheoden = "https://bit.ly/KingTheodenAssembly";
        String speakItalian = "https://bit.ly/KingdomOfHeavenAssembly";
        final String ASSEMBLY = "https://api.assemblyai.com/v2/transcript/";
        final URI API = new URI(ASSEMBLY);
        final Gson mainGson = new Gson();

        // Was added to protect my api key, to run on your system must make a custom
        // .env file and declare there. EX. MY_API_KEY=asdfklassdklf
        //figured this was a more industry standard way of doing this rather than making something like a constants file
        Dotenv env = Dotenv.configure()
            .directory("./assembly_api_demo/src/main/java/project")
            .load();

        Transcript gladiator = new Transcript(maximius, true, true); //adds punctuation from AssemblyAPI, adds auto text formatting from AssemblyAPI
        String jsonMaximus = mainGson.toJson(gladiator);

        Transcript theoden = new Transcript(deathTheoden, true, true);
        String jsonDeath = mainGson.toJson(theoden);

        Transcript kogJerusalem = new Transcript(speakItalian); //using just url to get default params and see if diff
        String jsonSpeakItalian = mainGson.toJson(kogJerusalem);

        String testMaximus = String.format("**** TEST MAXIMUS %s", jsonMaximus); 
        String testDEATH = String.format("**** TEST THEODEN %s", jsonDeath);
        String testKog = String.format("**** TEST WHERE THE MEN SPEAK ITALIAN %s", jsonSpeakItalian); 

        //TODO: Everthing clears for now on the json front, lets see if the api will consume my transcript object
        logs.debug(testMaximus);
        logs.debug(testDEATH);
        logs.debug(testKog);

         HttpRequest postReqMaximus = HttpRequest.newBuilder()
            .uri(API)
            .header("Authorization", env.get("API_KEY")) //env.get looks in your .env file for a variable declared there under a specific var name
            .POST(BodyPublishers.ofString(jsonMaximus))
            .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> postResp = client.send(postReqMaximus, BodyHandlers.ofString());
        logs.debug(postResp.body());

        gladiator = mainGson.fromJson(postResp.body(), Transcript.class);


    }

}
