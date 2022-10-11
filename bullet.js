class Bullet{
constructor(x,y,vx,vy,d,i){
    this.d=d
    this.sprite=createSprite(x,y,windowWidth/32, windowHeight/32)
    this.sprite.shapeColor="yellow"
    this.sprite.setVelocity(vx,vy)
    this.sprite.setCollider("rectangle", 0, 0, windowWidth/32, windowHeight/32)
   if(i===1){var bulletIndex = "Bullets/"+(player.index-1)+"/"+TPIB;
      database.ref(bulletIndex).set({
        positionX: x,
        positionY: y,
        velox:vx,
        veloy:vy,
        damage: d,
      })
}
}

Destroy(i,ii,iii,iiii){
  var ref = database.ref("Bullets/"+i+"/"+ii);ref.remove()
    buls[iii][1][iiii][1].sprite.destroy()
    buls[iii][1].splice(iiii,1)
    if(i==player.index-1){
      var b = TPIB.substring(0,1), n = TPIB.substring(1,100)
      if(n!=0){
    TPIB=b+(Number(n)-1)}
    }
    
Bullet.getBulletsInfo()
}
update(i,ii){
    var bulletIndex = "Bullets/"+i+"/"+ii;
      database.ref(bulletIndex).update({
        positionX: this.sprite.position.x,
        positionY: this.sprite.position.y,
        velox:this.sprite.velocity.x,
        veloy:this.sprite.velocity.y,
        damage: this.d,
      })
}

static getBulletsInfo(){
  var bulletInfoRef=database.ref("Bullets");
  bulletInfoRef.on("value", data=>{
    allBullets=data.val()
  })
  }
}
