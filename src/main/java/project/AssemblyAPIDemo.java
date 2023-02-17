package project;

import java.net.URI;
import io.github.cdimascio.dotenv.Dotenv;

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
    private static Logger logs = LoggerFactory.getLogger(AssemblyAPIDemo.class); //added logs just for practice

    public static void main(String[] args) throws Exception {

        String maximius = "https://bit.ly/GladiatorAssembly"; //added bit.lys to make links more managable, really long before
        String deathTheoden = "https://bit.ly/TheodenAssembly";
        String speakItalian = "https://bit.ly/SpeakItalianAssembly";
        String assembly = "https://api.assemblyai.com/v2/transcript/";
        URI api = new URI(assembly);

        // Was added to protect my api key, to run on your system must make a custom
        // .env file and declare there. EX. MY_API_KEY=asdfklassdklf
        Dotenv env = Dotenv.configure()
                .directory("./src/main/java/project")
                .ignoreIfMalformed()
                .ignoreIfMissing()
                .load();

        //TODO:REMOVE WAS FOR TESTING
        logs.debug(String.format(("KEY IS %s."), env.get("API_KEY")));

        Transcript gladiator = new Transcript();
        gladiator.setAudio_url(maximius);
        gladiator.setPunctuate(true); //adds punctuation from AssemblyAPI 
        gladiator.setFormat_text(true); //adds auto text formatting from AssemblyAPI
        Gson gsonGlad = new Gson();
        String jsonMaximus = gsonGlad.toJson(gladiator);

        Transcript theoden = new Transcript(); 
        theoden.setAudio_url(deathTheoden);
        theoden.setPunctuate(true);
        theoden.setFormat_text(true);
        Gson gsonTheo = new Gson(); 
        String jsonDEATH = gsonTheo.toJson(theoden);

        Transcript kogJerusalem = new Transcript(); 
        kogJerusalem.setAudio_url(speakItalian); // not setting specific params on this one just to see the difference
        Gson gsonKog = new Gson();
        String jsonSpeakItalian = gsonKog.toJson(kogJerusalem);

        String testMaximus = String.format("**** TEST MAXIMUS %s", jsonMaximus); 
        String testDEATH = String.format("**** TEST THEODEN %s", jsonDEATH); 
        String testKog = String.format("**** TEST WHERE THE MEN SPEAK ITALIAN %s", jsonSpeakItalian); 
        //TODO: Everthing clears for now on the json front, lets see if the api will consume my transcript object
        logs.debug(testMaximus);
        logs.debug(testDEATH);
        logs.debug(testKog);

        HttpRequest postReq = HttpRequest.newBuilder()
                .uri(api)
                .header("Authorization", env.get("API_KEY"))
                .POST(BodyPublishers.ofString(jsonMaximus))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> postResp = client.send(postReq, BodyHandlers.ofString());
        logs.debug(postResp.body());

    }

}
