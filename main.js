var nosex=0
var nosey=0
var rightwristx=0
var leftwristx=0
var difference=0

function setup(){
    video=createCapture(VIDEO)
    video.size(300,300);
    canvas=createCanvas(600,400);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modeLoaded)
    poseNet.on('pose', gotposes);
}
   
function modeLoaded(){
        console.log("PoseNet is initialized")
       }
       


function draw(){
    background("rgb(40, 3, 49)");
    fill("orange");
    textSize(difference);
    text('Coding', nosex, nosey);
}
      
function gotposes(results){
    if(results.length>0){
        console.log(results)
        nosex=results[0].pose.nose.x
        nosey=results[0].pose.nose.y
        rightwristx=results[0].pose.rightWrist.x
        leftwristx=results[0].pose.leftWrist.x
        difference=Math.floor(leftwristx-rightwristx)
        document.getElementById("size").innerHTML=difference
    }
}
