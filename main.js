noseX=0;
noseY=0;
i=""
function preload(){
i=loadImage('cn.png');
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose_x= "+results[0].pose.nose.x);
        console.log("nose_y= "+results[0].pose.nose.y);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }



}

function draw(){
image(video,0,0,300,300);
/*fill('red');
stroke('red');
circle(noseX,noseY,20);*/
image(i,noseX-16,noseY-16,35,35);


}
function take_snapshot(){
    save("Myfilterimg.png");
}