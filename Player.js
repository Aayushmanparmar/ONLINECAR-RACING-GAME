class Player {
    constructor(){}
  
    getCount(){
      var playerCountRef = database.ref('playercount');
      playerCountRef.on("value",function(data){
        playercount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playercount: count
      });
    }
  
    update(Name){
      var playerIndex = "player" + playercount;
      database.ref(playerIndex).set({
        Name:Name
      });
    }
  }