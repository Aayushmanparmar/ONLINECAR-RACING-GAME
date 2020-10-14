class Form{

    constructor()
    {

    }
    display()
    {
        var title = createElement('h2')
   title.html("ONLINE CAR RACING GAME")
   title.position(400,0)
   var input = createInput("Name")
   var button = createButton('Play')
   var Greeting = createElement('h3')
   input.position(400,160)
   button.position(450,200)
   button.mousePressed(function(){input.hide();button.hide();
var Name= input.value()
playercount+=1
player.update(Name)
player.updateCount(playercount)
Greeting.html("HELLO "+Name)
Greeting.position(400,160)})
    }
}