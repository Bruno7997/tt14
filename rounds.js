
class Rounds{
    
    constructor(){
        this.x1=undefined
        this.y1=undefined
        this.x2=undefined
        this.y2=undefined
if((Round) % 2 === 0){
        nl+=nl/2.25
}

this.a=null

}
rounds(){
    for(var plr in p){
        if(p[plr][1]!=0){
    if(this.x1==undefined){this.x1=p[plr][0].position.x};if(this.y1==undefined){this.y1=p[plr][0].position.y}
    if(this.x2==undefined){this.x2=p[plr][0].position.x};if(this.y2==undefined){this.y2=p[plr][0].position.y}
    if(p[plr][0].position.x < this.x1){this.x1=p[plr][0].position.x}
    if(p[plr][0].position.x > this.x2){this.x2=p[plr][0].position.x}
    if(p[plr][0].position.y < this.y1){this.y1=p[plr][0].position.y}
    if(p[plr][0].position.y > this.y2){this.y2=p[plr][0].position.y}
    }
    }
    for(var q=0;q<this.a&&m.length<5;){
        if(m.length<5){
        switch(Math.round(random(1,4))){
//X = 0
case(1):var mons = new Monster(this.x1-windowWidth/16-windowWidth/2, Math.round(random(this.y1-windowHeight/2,this.y2+windowHeight/2)),windowWidth/16,windowHeight/16,0,nl,0);m.push(mons);mL.push(nl);indexm+=1
break;
//X = windowWidth
case(2):var mons = new Monster(this.x2+windowWidth/16+windowWidth/2, Math.round(random(this.y1-windowHeight/2,this.y2+windowHeight/2)),windowWidth/16,windowHeight/16,0,nl,0);m.push(mons);mL.push(nl);indexm+=1
break;
//Y = 0
case(3):var mons = new Monster(Math.round(random(this.x1-windowWidth/2,this.x2+windowWidth/2)), this.y1-windowHeight/16-windowHeight/2,windowWidth/16,windowHeight/16,0,nl,0);m.push(mons);mL.push(nl);indexm+=1
break;
//Y = windowHeight
case(4):var mons = new Monster(Math.round(random(this.x1-windowWidth/2,this.x2+windowWidth/2)), this.y2+windowHeight/16+windowHeight/2,windowWidth/16,windowHeight/16,0,nl,0);m.push(mons);mL.push(nl);indexm+=1
break;
}  
       this.a-=1 }

}
if(Round % 10 ===0){
    for(var I=Round/5;I>0;I-=1){
        Boss+=1
     switch(Math.round(random(1,4))){
        //X = 0
        case(1):var mons = new Monster(this.x1-windowWidth/16-windowWidth/2, Math.round(random(this.y1-windowHeight/2,this.y2+windowHeight/2)),windowWidth/16+windowWidth/32,windowHeight/16+windowHeight/32,1,nl*2,0);m.push(mons);mL.push(nl*2);indexm+=1
        break;
        //X = windowWidth
        case(2):var mons = new Monster(this.x2+windowWidth/16+windowWidth/2, Math.round(random(this.y1-windowHeight/2,this.y2+windowHeight/2)),windowWidth/16+windowWidth/32,windowHeight/16+windowHeight/32,1,nl*2,0);m.push(mons);mL.push(nl*2);indexm+=1
        break;
        //Y = 0
        case(3):var mons = new Monster(Math.round(random(this.x1-windowWidth/2,this.x2+windowWidth/2)), this.y1-windowHeight/16-windowHeight/2,windowWidth/16+windowWidth/32,windowHeight/16+windowHeight/32,1,nl*2,0);m.push(mons);mL.push(nl*2);indexm+=1
        break;
        //Y = windowHeight
        case(4):var mons = new Monster(Math.round(random(this.x1-windowWidth/2,this.x2+windowWidth/2)), this.y2+windowHeight/16+windowHeight/2,windowWidth/16+windowWidth/32,windowHeight/16+windowHeight/32,1,nl*2,0);m.push(mons);mL.push(nl*2);indexm+=1
        break;
        }  
}
}
}

    
    }