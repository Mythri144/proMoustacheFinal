noseX = 0;
noseY = 0;

function preload(){
    moustache_pic = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(450, 450);
    video.hide();

    PoseNet = ml5.poseNet(video, modelLoaded);
    PoseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized. ');
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw(){
    image(video, 0, 0, 450, 450);
    fill(255, 0, 0);
    stroke(255, 0, 0);
    image(moustache_pic, noseX-38, noseY+4, 80, 50);
}

function take_snapshot(){
    save('myImage.jpg');
}