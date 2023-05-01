package project;

public class Transcript {

    private String audio_url;
    private String id;
    private String status; 
    private Boolean punctuate; 
    private Boolean format_text;

    public Transcript () {}

    public Transcript(String audio_url, String id, String status, Boolean punctuate, Boolean format_text) {
        this.audio_url = audio_url;
        this.id = id;
        this.status = status;
        this.punctuate = punctuate;
        this.format_text = format_text;
    }

    public Transcript(String audio_url) {
        this.audio_url = audio_url;
    }

    public Transcript(String audio_url, Boolean punctuate, Boolean format_text) {
        this.audio_url = audio_url;
        this.punctuate = punctuate;
        this.format_text = format_text;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getAudio_url() {
        return audio_url;
    }

    public void setAudio_url(String audio_url) {
        this.audio_url = audio_url;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Boolean getPunctuate() {
        return punctuate;
    }

    public void setPunctuate(Boolean punctuate) {
        this.punctuate = punctuate;
    }

    public Boolean getFormat_text() {
        return format_text;
    }
    
    public void setFormat_text(Boolean format_text) {
        this.format_text = format_text;
    }

   
}
