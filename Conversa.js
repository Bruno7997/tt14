class Conversa {
    constructor() {
        this.chat = createInput("").attribute("placeholder", "Digite");this.chat.style('font-size', Math.sqrt(width/4.25 , height/16*2).toFixed(0)+'px');this.chat.size(width/4.25 , height/16);this.chat.position(width/2 - width/4/2, height/2 - height/16*2.5);this.chat.class("customInput");
        
    }





    create() {
        var x
        if(allChats==undefined){x=0}
        else{x=allChats.length}
        var chatIndex = "chat/" + x;
    database.ref(chatIndex).set({
         texto: player.name+":"+this.chat.value(),
         tempo: 300
         })
       }
       update(x, t){
        var chatIndex = "chat/" + x;
        database.ref(chatIndex).update({
             tempo: t-1
             })
             if(t-1<=0){
                this.destroy(x)
             }
       }
       destroy(x){
        var ref = database.ref("chat/" + x);ref.remove()
        //Conversa.getChatInfo()
       }

static getChatInfo(){
  var chatInfoRef=database.ref("chat");
  chatInfoRef.on("value", data=>{
    allChats=data.val()
  })
  console.log(allChats)
  }

  
    
   
}
