package project;

import java.net.URI;
import io.github.cdimascio.dotenv.Dotenv;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.http.HttpRequest.BodyPublishers;
import java.net.http.HttpResponse.BodyHandler;
import java.net.http.HttpResponse.BodyHandlers;

import com.google.gson.Gson;

public class AssemblyAPIDemo {

    private static String jsonOutput;

    public static void main(String[] args) throws Exception {

        String maximius = "https://github.com/SerBeluga/Personal-GitHub-Projects/blob/master/src/Audio%20Files/Maximus%20Decimus%20Meridius.mp3";
        String DEATH = null; // TODO: REPLACE WITH THEODEN DEATH SOUNDBYTE
        String assembly = "https://api.assemblyai.com/v2/transcript";
        URI api = new URI(assembly);

        // Was added to protect my api key, to run on your system must make a custom
        // .env file and declare there. EX. MY_API_KEY=asdfklassdklf
        Dotenv envVar = Dotenv.configure()
                .directory("./src/main/java/project")
                .ignoreIfMalformed()
                .ignoreIfMissing()
                .load();

        // TODO: REMOVE. WAS FOR TESTING
        // ONLY*********************************************
        System.out.println(String.format(("KEY IS %s."), envVar.get("API_KEY")));

        Transcript audioClip1 = new Transcript();
        audioClip1.setAudioURL(maximius);
        Gson gson = new Gson();
        String jsonMaximus = gson.toJson(audioClip1);

        // TODO: REMOVE FOR TESTING ONLY!
        System.out.println("*******" + jsonMaximus);

        HttpRequest postReq = HttpRequest.newBuilder()
                .uri(api)
                .header("Authorization", envVar.get("API_KEY"))
                .POST(BodyPublishers.ofString(jsonMaximus))
                .build();

        HttpClient client = HttpClient.newHttpClient();
        HttpResponse<String> postResp = client.send(postReq, BodyHandlers.ofString());
        System.out.println(postResp.body());

    }

}
