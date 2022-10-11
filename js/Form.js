class Form {
  constructor() {
    this.pronto=0
    //Objetos
    this.inputN = createInput("").attribute("placeholder", "Digite seu nome");
    this.inputN.style('font-size', Math.sqrt(width/4*3 + height/16*3).toFixed(0)+'px')
    this.inputC1 = createInput("").attribute("placeholder", "Digite sua cor (RGB), 1° valor");
    this.inputC1.style('font-size', Math.sqrt(width/4.25 , height/16*2).toFixed(0)+'px')
    this.inputC2 = createInput("").attribute("placeholder", "Digite sua cor (RGB), 2° valor");
    this.inputC2.style('font-size', Math.sqrt(width/4.25 , height/16*2).toFixed(0)+'px')
    this.inputC3 = createInput("").attribute("placeholder", "Digite sua cor (RGB), 3° valor");
    this.inputC3.style('font-size', Math.sqrt(width/4.25 , height/16*2).toFixed(0)+'px')
    this.playButton = createButton("Play");
    this.playButton.style('font-size', '50px')
    this.greeting = createElement("h2");
    this.greeting.style('font-size', '50px')

    this.sprite=createSprite(width/2 , height/2-height/3,width/8 , height/16)
  }

  setElementsPosition() {
    //Posição
    this.inputN.size(width/4 , height/16)
    this.inputN.position(width/2 - width/4/2, height/2 - height/16*4);
    this.inputC1.size(width/4.25 , height/16)
    this.inputC1.position(width/2 - width/4/2*3, height/2 - height/16*2.5);
    this.inputC2.size(width/4.25 , height/16)
    this.inputC2.position(width/2 - width/4/2, height/2 - height/16*2.5);
    this.inputC3.size(width/4.25 , height/16)
    this.inputC3.position(width/2 + width/4/2, height/2 - height/16*2.5);
    this.playButton.size(width/4 , height/16)
    this.playButton.position(width/2 - width/4/2, height/2 - height/16/2);
    this.greeting.size(width , height/16)
    this.greeting.position(width/2 - width/2, height/2 - height/4/2);
var pC = database.ref("playerCount")
      pC.on("value", data =>{
         var info = data.val()
        this.jogadores = info
      })
    
  }

  setElementsStyle() {
    //Estilo
    this.inputN.class("customInput");
    this.inputC1.class("customInput");
    this.inputC2.class("customInput");
    this.inputC3.class("customInput");
    this.playButton.class("customButton");
    this.greeting.class("greeting");
  }

  //BP
  hide() {
    //Esconder os objetos
    this.greeting.hide();
    this.playButton.hide();
    this.inputN.hide();
    this.inputC1.hide();
    this.inputC2.hide();
    this.inputC3.hide();
  }

  handleMousePressed() {
    //Apertar o botão
    this.playButton.mousePressed(() => {
      this.inputN.hide();
      this.inputC1.hide();
      this.inputC2.hide();
      this.inputC3.hide();
      this.playButton.hide();
      this.i=1
      this.message()
      
      playerCount += 1
      player.name = this.inputN.value();
      player.color1 = (this.inputC1.value())
      player.color2 = (this.inputC2.value())
      player.color3 = (this.inputC3.value())
      player.index = playerCount;
      plca=player.index-1
      player.addPlayer();
      player.updateCount(playerCount)
    });
    
  }
  message(){
    if(this.i==1){

    var message = `Olá ${this.inputN.value()}
      </br>Espere outros jogadores entrarem e aperte Enter para começar, jogadores: ${this.jogadores}
      </br> ${this.prontos} de ${this.jogadores} preparados`;
      this.greeting.html(message);     
      this.Prontos()
    }
  }

  display() {
    //Chamando as funções(todas)
    this.setElementsPosition();
    this.setElementsStyle();
    this.handleMousePressed();
    this.showColor()
  }
  res(){
    //Remover os objetos
    this.inputN.remove()
    this.inputC1.remove()
    this.inputC2.remove()
    this.inputC3.remove()
    this.greeting.remove()
    this.playButton.remove()
    this.sprite.remove()
    this.i=0
  }
  showColor(){
    //Cor do personagem
this.color=[this.inputC1.value(),this.inputC2.value(),this.inputC3.value()]
this.sprite.shapeColor=(this.color)
}
Prontos(){
  if(this.jogadores>=0&&this.jogadores==playerCount){
  var pC = database.ref("prontos")
      pC.on("value", data =>{
         var info = data.val()
        this.prontos = info
      })
}
}
Prontosupdate(i){
  database.ref("/").update({
    prontos: (this.prontos+i)
    
  });
}
}
