function SoundIdentification()
{
    navigator.mediaDevices.getUserMedia({audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wjD1yeiba/model.json",modelReady);
}

function modelReady()
{
    classifier.classify(gotResult);
}
function gotResult(error,results)
{ 
   document.getElementById("Result_Sound").innerHTML = results[0].label;
   document.getElementById("Result_Accuracy").innerHTML = results[0].confidence.toFixed(2);
}