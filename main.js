img = "";
stat= "";
Input = document.getElementById("input_id").value;

function preload()
{
    
    

}

function setup() 
{

    canvas = createCanvas(550, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(550, 400);
    video.hide();
    
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById('status').innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{

    console.log("Model loaded!");
    stat = true;
    

}

function draw()
{

    image(video, 0, 0, 550, 400);

}    