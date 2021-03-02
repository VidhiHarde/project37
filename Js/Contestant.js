class Contestant{
    constructor(){
this.index=null;
this.distance=0;
this.name=null;

this.button=createButton("Submit");
this.button.position(150,300);
    }
hide(){
this.button.hide();
}
display(){
this.button.mousePressed(()=>{
this.input1.hide();
this.input2.hide();
this.button.hide();
var name=this.input1.value();
contestantCount+=1;
contestants.index=contestantCount;
contestants.update();
contestants.updateCount(contestantCount);
})
    
}
 getCount(){
     var contestantCountRef=database.ref("contestantCount");
     contestantCountRef.on("value",function (data){
      contestantCount=data.val();
     });

 }

updateCount(count){ 
    database.ref("/").update({
        contestantCount:count
    })
}
update(){
    var contestantIndex="contestants/contestant"+this.index;
    database.ref(contestantIndex).set({
        name:this.name,
        distance:this.distance
    })
}

static getcontestantInfo(){
    var contestantInfoRef=database.ref("contestants");
    contestantInfoRef.on("value",(data)=>{
        allContestants=data.val();
    });
}

}
