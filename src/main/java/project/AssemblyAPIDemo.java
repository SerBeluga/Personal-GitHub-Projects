package project;

import java.net.URI;
import io.github.cdimascio.dotenv.Dotenv;
import java.net.http.HttpRequest; 

public class AssemblyAPIDemo {

    public static void main(String[] args) throws Exception { 

        String assembly = "https.//api.assemblyai.com/v2/transcript";
        URI api = new URI(assembly); 


        //Was added to protect my api key, to run on your system must make a custom .env file and declare there ex. MY_API_KEY=asdfklassdklf
        Dotenv envVar = Dotenv.configure()
            .directory("./src/main/java/project")
            .ignoreIfMalformed()
            .ignoreIfMissing()
            .load();

        
        //TO-DO: REMOVE. WAS FOR TESTING ONLY*********************************************
        System.out.println(String.format(("KEY IS %s."), envVar.get("API_KEY")));
            

       /*  HttpRequest postReq = HttpRequest.newBuilder()
            .uri(api)
            .header("Authorization", envVar.get("API_KEY"))
            . */

    
    }

    
}

