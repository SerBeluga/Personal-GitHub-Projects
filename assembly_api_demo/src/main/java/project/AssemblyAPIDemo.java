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

    private static final Logger logs = LoggerFactory.getLogger(AssemblyAPIDemo.class); //added logs just for practice

    public static void main(String[] args) throws Exception {

        String gladiator = "https://bit.ly/MaximusAssembly"; //added bit.lys to make links more manageable, really long before
        String deathTheoden = "https://bit.ly/KingTheodenAssembly";
        String speakItalian = "https://bit.ly/KingdomOfHeavenAssembly";
        final String assemblyEndpoint = "https://api.assemblyai.com/v2";
        final Gson mainGson = new Gson();

        // Was added to protect my api key, to run on your system must make a custom
        // .env file and declare there. EX. MY_API_KEY=asdfklassdklf
        //figured this was a more industry standard way of doing this rather than making something like a constants file
        Dotenv env = Dotenv.configure()
            .directory("./assembly_api_demo/src/main/java/project")
            .load();

        //for testing only
        //logs.debug("Key TEST %s" + env.get("API_KEY"));    

        Transcript maximus = new Transcript(gladiator, true, true); //adds punctuation from AssemblyAPI, adds auto text formatting from AssemblyAPI
        String jsonMaximus = mainGson.toJson(gladiator);

        Transcript theoden = new Transcript(deathTheoden, true, true);
        String jsonDeath = mainGson.toJson(theoden);

        Transcript kogJerusalem = new Transcript(speakItalian); //using just url to get default params and see if diff
        String jsonSpeakItalian = mainGson.toJson(kogJerusalem);

        //for testing only
        // String testMaximus = String.format("**** TEST MAXIMUS %s", jsonMaximus); 
        // String testDEATH = String.format("**** TEST THEODEN %s", jsonDeath);
        // String testKog = String.format("**** TEST WHERE THE MEN SPEAK ITALIAN %s", jsonSpeakItalian); 

        //AYO IT WORKS nice...
        HttpRequest postReqMaximus = HttpRequest.newBuilder()
            .uri(new URI(assemblyEndpoint + "/transcript"))
            .header("Authorization", env.get("API_KEY")) //env.get looks in your .env file for a variable declared there under a specific var name
            .POST(BodyPublishers.ofString(jsonMaximus))
            .build();

        HttpClient clientMaximus = HttpClient.newHttpClient();
        HttpResponse<String> postRespMax = clientMaximus.send(postReqMaximus, BodyHandlers.ofString());
        logs.debug(postRespMax.body());
        //using gson package to translate response body to a object of a specific class, the package is aweomse honestly
        maximus = mainGson.fromJson(postRespMax.body(), Transcript.class);
        //check for id from response body
        logs.debug(maximus.getId());

        HttpRequest getReqMax = HttpRequest.newBuilder()
            .uri(new URI(assemblyEndpoint + "/"  + maximus.getId()))
            .header("Authorization", env.get("API_KEY"))
            .build(); 

        if("completed".equals(maximus.getStatus())){
            HttpResponse<String> getRespMax = clientMaximus.send(getReqMax, BodyHandlers.ofString()); 
            maximus = mainGson.fromJson(getRespMax.body(), Transcript.class); 
            logs.debug(String.format("Status: %s", maximus.getStatus()));
            logs.debug("Transcription completed!");
            logs.debug(String.format("TRANSCRIPTION: %s", maximus.getText()));
        
        }
        else if("processing".equals(maximus.getStatus())){
            logs.debug(String.format("Status: %s", maximus.getStatus()));
        }


    
    }

}
