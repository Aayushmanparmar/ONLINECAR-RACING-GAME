var canvas,backgroundImage,playercount,database,form,game,player,gameState=0;

function setup(){
    database = firebase.database();
    canvas=createCanvas(400,400);
    game= new Game()
    game.getState()
    game.start()
}

function draw(){
}

/*function writePosition(x,y){
    database.ref('Ball/Position').set({'x' : position.x + x, 'y' : position.y + y})
   
}

function readPosition(data)
{
    position = data.val();
    console.log(position.x)
    ball.x = position.x
    ball.y = position.y
}
function showError()
{
    console.log("error in reading database")
}*/