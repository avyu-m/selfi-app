var SpeechRecognition = window.webkitSpeechRecognition;
var i = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = " ";
    i.start();


}
i.onresult = function (event) {
    console.log(event);
    var content = event.resutls[0][0].transscript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    speak();

}

function speak() {
    var synth = window.speechSynthesis;
    speakdata =  
}