class Monster{
    constructor(x,y,w,h,c,life,A){
        this.X=0
        this.Y=0
        this.sprite = createSprite(x,y,w,h);
if(c==0){this.sprite.shapeColor = "black"}
if(c==1){this.sprite.shapeColor = "red"}

    this.sprite.setCollider("rectangle", 0, 0, w,h)
    //this.sprite.debug=true
    this.indexXY=0
    if(A==0){
   var monsterIndex = "monsters/monster" + indexm;
    database.ref(monsterIndex).set({
      positionX: x,
      positionY: y,
      width: w,
      height: h,
      life: life,
      color: c,
    })
  }
    this.i=0
    
}
speed(px,py,i){
if(this.sprite.position.x>px){this.X=-0.95}else if(this.sprite.position.x<px){this.X=0.95}else{this.X=0}
if(this.sprite.position.y>py){this.Y=-0.95}else if(this.sprite.position.y<py){this.Y=0.95}else{this.Y=0}
this.sprite.setVelocity(this.X,this.Y)
this.update(i)
//m[i].sprite.position.x=this.positionX;m[i].sprite.position.y=this.positionY



}
Destroy(i,s){

    m[i].sprite.destroy();m.splice(i,1);
    var ref = database.ref("monsters/monster"+i);ref.remove()
    score+=s
    this.i=0
    var ref = database.ref("monsters/monster"+m.length);ref.remove()
    indexm-=1
}
Life(i,ii,iii){
 mL[i]-=buls[ii][1][iii][1].d

 
    //this.life-=1
    this.update(i)
    if(mL[i]<=0){
        mL.splice(i,1);
        if(m[i].sprite.shapeColor=="black"){m[i].Destroy(i,1)}
        else{m[i].Destroy(i,10)}
    }
    
    
    
}
static getMonstersInfo(){
    var monsterInfoRef=database.ref("monsters");
    monsterInfoRef.on("value", data=>{
      allMonsters=data.val()
    })
    }

    update(i) {
        var monsterIndex = "monsters/monster"+i
        database.ref(monsterIndex).update({
           positionX: this.sprite.position.x,
           positionY: this.sprite.position.y,
           life: mL[i],
         });
       }
       
}