canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

nasa_array=["nasa1.jpeg", "nasa2.jpeg", "nasa3.jpeg", "nasa4.jpeg"];
var k=Math.floor(Math.random()*4);

background_img=nasa_array[k];
rover_img="rover.png";
rover_x=10;
rover_y=10;

function add(){
    background_imgTag=new Image(); // creation of img object
    background_imgTag.onload=uploadBackground; // drawing the img by calling function
    background_imgTag.src=background_img; // loading the img src

    rover_imgTag=new Image(); 
    rover_imgTag.onload=uploadrover;
    rover_imgTag.src=rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed)
    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '38')
    {
        up();
        console.log("up");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }
}

function up(){
    if(rover_y>=0)
    {
        rover_y-=10;
        console.log("When up arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function down(){
    if(rover_y<=500)
    {
        rover_y+=10;
        console.log("When down arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left(){
    if(rover_x>=0)
    {
        rover_x-=10;
        console.log("When left arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function right(){
    if(rover_x<=700)
    {
        rover_x+=10;
        console.log("When right arrow is pressed = " + rover_x + " - " + rover_y);
        uploadBackground();
        uploadrover();
    }
}