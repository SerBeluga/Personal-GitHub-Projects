package project;

import java.net.URI;
import io.github.cdimascio.dotenv.Dotenv;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandlers;

import com.google.gson.Gson;

public class AssemblyAPIDemo {

    private static String jsonOutput;

    public static void main(String[] args) throws Exception {

        String maximius = "https://bit.ly/GladiatorAssembly";
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

        // TODO: REMOVE. WAS FOR TESTING
        // ONLY*********************************************
        System.out.println(String.format(("KEY IS %s."), env.get("API_KEY")));

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
        kogJerusalem.setAudio_url(speakItalian);
        Gson gsonKog = new Gson();
        String jsonSpeakItalian = gsonKog.toJson(kogJerusalem);

        String testMaximus = String.format("**** TEST MAXIMUS %s", jsonMaximus); 
        String testDEATH = String.format("**** TEST THEODEN %s", jsonDEATH); 
        String testKog = String.format("**** TEST WHERE THE MEN SPEAK ITALIAN %s", jsonSpeakItalian); 
        // TODO: REMOVE FOR TESTING ONLY!
        System.out.println(testMaximus);
        System.out.println(testDEATH);
        System.out.println(testKog);

        HttpRequest postReq = HttpRequest.newBuilder()
                .uri(api)
                .header("Authorization", env.get("API_KEY"))
                .POST(BodyPublishers.ofString(jsonMaximus))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> postResp = client.send(postReq, BodyHandlers.ofString());
        System.out.println(postResp.body());

    }

}
