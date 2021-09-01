status = "";
function preload(){

}

function setup(){
    canvas = createCanvas(430,300);
    canvas.center();
    video = createCapture(VIDEO);
    vide0.hide();
    video.size(430,300);
}

function draw(){
    image(video,0,0,430,300);
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    value  = document.getElementById("status").value;
}

function modelLoaded(){
 console.log("model is loaded ");
 status = true ; 
}
