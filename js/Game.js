class Game {
  constructor() {
    this.r=0
    this.a=undefined
  }
  //Fazendo referencia ao valor do gameState
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
    
  }
 //Atualizando o gameState
  update(state) {
    
    database.ref("/").update({
      gameState: state
    })
    if(state==1){this.updateRound(Round+1);this.r=1;round=new Rounds;round.a=qdm.toFixed(0);if(round.a>50){nl+=nl/2.25}}
    if(state==0){this.updateQuant(qdm);}
    
  }

  
  start() {
    if(gameState==-2){
    player = new Player();
   playerCount = player.getCount();
    form = new Form();
    form.display();
  }
  }

  //Esconder o formulário
  handleElements() {
    form.hide();
  }

  //Criando os jogadores
  play() {
    Monster.getMonstersInfo()
    Bullet.getBulletsInfo();
    Player.getPlayersInfo();
    Conversa.getChatInfo()
    this.getQuant();this.getRound()
    this.handleElements();
    

  
  for(var i=0;p.length!=playerCount;i++){
  this.sprite=createSprite(windowWidth/2, windowHeight/2,windowWidth/16, windowHeight/16)
  this.sprite.setCollider("rectangle", 0, 0, windowWidth/16,windowHeight/16)
  this.sprite.shapeColor= gco[i]
  p.push([this.sprite,100])
buls[i]=[i,[["b0","bul"]]];buls[i][1].splice(0,1)
  }
  
  var indexp = 0;
for(var plr in allPlayers){
  if(p[player.index-1][1]!=0){
  var x=allPlayers[plr].positionX
  var y=allPlayers[plr].positionY
  var n=allPlayers[plr].name
  if(p[indexp]!=undefined){
  p[indexp][0].position.x = x
  p[indexp][0].position.y = y
  fill("black");textSize( Math.sqrt(width/4.25 , height/16*2).toFixed(0))
  text(n,  p[indexp][0].position.x-(p[indexp][0].width/2), p[indexp][0].position.y-(p[indexp][0].height))

  }
}indexp+=1
  }
var indexmm = 0;

if(allMonsters!=undefined){
  for(var plr in allMonsters){
    if(this.r==0&&gameState==1){
      this.createMonster()}
    var x=allMonsters[plr].positionX
    var y=allMonsters[plr].positionY
    if(m[indexmm]!=undefined){
    m[indexmm].sprite.position.x = x
    m[indexmm].sprite.position.y = y
    m[indexmm].update(indexmm)
    indexmm+=1
    
    }
    
  }
  }


if(allBullets!=undefined){

for(var INDEX in allBullets){ 
  for(var PosB in allBullets[INDEX]){
    var px = allBullets[INDEX][PosB].positionX
    var py = allBullets[INDEX][PosB].positionY
    var vx = allBullets[INDEX][PosB].velox
    var vy = allBullets[INDEX][PosB].veloy
    var d = allBullets[INDEX][PosB].damage
    for(var BIndex in buls){
      var achado=0, ach
      if(buls[BIndex][0]==INDEX){
        ach=BIndex
for(var Bpos in buls[BIndex][1]){
  if(buls[BIndex][1][Bpos][0]==PosB){
    buls[BIndex][1][Bpos][1].sprite.position.x = px;
    buls[BIndex][1][Bpos][1].sprite.position.y = py;
    buls[BIndex][1][Bpos][1].sprite.velocity.x = vx;
    buls[BIndex][1][Bpos][1].sprite.velocity.y = vy;
    buls[BIndex][1][Bpos][1].damage = d;
    achado=1
}
}
if(achado==0){
this.createBullet(px,py,vx,vy,d,INDEX, ach)
}
}

}
}
}
}

var indexp = 0;
if(allChats!=undefined){
for(var plr in allChats){
  var con = allChats[plr].texto
  var tem = allChats[plr].tempo
  if(con.length>50){
    for(var x=0;x<((con.length/50).toFixed(0));x+=1){
var d = con.slice((0+50*x),50*(x+1)),D=con.slice(50*(x+1),con.length)
con=d+"\n"+D
    }
  }
  console.log(allChats.length)
  fill("black");textSize( Math.sqrt(width/4.25 , height/16*2).toFixed(0))
text(con, p[plca][0].position.x-width/2,p[plca][0].position.y+height/2.2)
if(Chat==undefined){Chat=new Conversa;Chat.chat.remove()}
Chat.update(plr,tem)
}}

    }
    jnNpe(){
      if(gameState!=-2){
        clear()
        background(200,200,200);
        fill("red");textSize(25)
text("O jogo ja começou, você não pode mais entrar",windowWidth/2-windowWidth/4,windowHeight/2-windowHeight/4)
    fill("black")
    this.r=1}
    else{this.r=0}
}
colora(a){
  while(a>0){
    pC = database.ref("players/player"+a+"/color1")
    pC.on("value", data =>{info1 = data.val()})
    pC = database.ref("players/player"+a+"/color2")
    pC.on("value", data =>{info2 = data.val()})
    pC = database.ref("players/player"+a+"/color3")
    pC.on("value", data =>{info3 = data.val()})
    gco[a-1]=[info1,info2,info3]
    a-=1

  }
}
updateRound(count) {
  database.ref("/").update({
    round: count
    
  });
this.getRound()}
  getRound() {
      var rods = database.ref("round");
      rods.on("value", data => {
        Round = data.val();
      });
}
updateQuant(qdm) {
  database.ref("/").update({
    qdm: qdm
    
  });
this.getQuant()}
  getQuant() {
      var qdmm = database.ref("qdm");
      qdmm.on("value", data => {
        qdm = data.val();
      });

}
createMonster(){
  
for(var plr in allMonsters){
  var px=allMonsters[plr].positionX
  var py=allMonsters[plr].positionY
  var w=allMonsters[plr].width
  var h=allMonsters[plr].height
  var clr=allMonsters[plr].color
  var lf=allMonsters[plr].life
  mons = new Monster(px,py,w,h,clr,lf,1);m.push(mons);mL.push(lf);indexm+=1
}
if(m.length>=qdm.toFixed(0)){this.r+=1}
}

createBullet(X,Y,VX,VY,D,Index, posb){
  var bul = new Bullet(X,Y,VX,VY,D,0)
  if(buls[Index]==undefined){buls[posb]=[Index,[["b"+buls[posb][1].length,bul]]]}
  else{Bulslet(posb,bul)}
  }
}
