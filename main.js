SpeechRecognition=window.webkitSpeechRecognition;

recognition=new SpeechRecognition();

function start()
{
document.getElementById("textbox").innerHTML="";
recognition.start();
}
recognition.onresult=function(event)
{
    console.log(event);
    content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    if(content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
}

function speak()
{
    synth=window.speechSynthesis;
    speak_data="taking selfie in 5 seconds";
    utterdata=new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterdata);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000);
}

Webcam.set({
    width:365,
    height:255,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera")

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie" src="'+data_uri+'">';
    });
}

function save()
{
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
    link.click();
}