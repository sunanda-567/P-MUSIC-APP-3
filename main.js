function preload()
{

}

function setup()
{
canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide();

poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotposes);
}

function modelLoaded()
{
    console.log("poseNet is intialized");
}

function gotposes(results)
{
if(results.length > 0)
{
    console.log(results);

    scoreLeft_wrist=results[0].pose.keypoints[9].score;
    console.log("scoreLeft_wrist = " + scoreLeft_wrist);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("leftWristX="+ leftWristX + " leftWristY=" + leftWristY);

    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("rightWristX="+ rightWristX + " rightWristY=" + rightWristY);
}
}
