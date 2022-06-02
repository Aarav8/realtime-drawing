noseX=0;
noseY=0;
difference=0;
leftwristX=0;
rightwristX=0;

function setup() 
{
    canvas=createCanvas(500,500);
    canvas.position(750,140);

    video=createCapture(VIDEO);
    video.position(100,90);
    video.size(600,600);

    posenet=ml5.poseNet(video,modelLoaded());
    posenet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log("model loaded");
}
function gotPoses(results)
{
    if(results.length>0)
    {
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(results);

        leftwristX=results[0].pose.leftWrist.x;
        rightwristX=results[0].pose.rightWrist.x;
        difference=floor(leftwristX-rightwristX);

        document.getElementById("side_of_the_square").innerHTML="Side of the square = "+difference+"px";
    }
}
function draw()
{
    background("#808080");
    stroke("#000000");
    fill("#fc0328");
    square(noseX,noseY,difference);
}
