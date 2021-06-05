function setup(){
    canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.hide()

console.log("ml5 version:",ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
}
function draw(){
    image(video,0, 0, 300, 300);
    classifier.classify(video, gotresults);
}

function modelLoaded(){
console.log('ModelLoaded!');
}

function gotresults(error, results){
if (error){
    console.error(error);
} else {
    console.log(results);
    document.getElementById("object").innerHTML = "Google Lens: "+ results[0].label;
    document.getElementById("zzz").innerHTML = "Mobile Net: "+ results[0].label;
}
}
  