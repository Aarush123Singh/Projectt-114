moustacheX=0;
moustacheY=0;

function preload(){
moustache_mouth=loadImage('https://www.lifepng.com/wp-content/uploads/2020/11/Ginger-Moustache-png-hd.png');
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initialised');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        moustacheX = results[0].pose.moustache.x-15;
        moustacheY = results[0].pose.moustache.y-15;
    }
}

function draw(){
   image(video,0,0,300,300);
   image(moustache_mouth,moustacheX,moustacheY,30,30);
}

function take_snapshot(){
save('img.png');
}