class Question{
    constructor(){
this.input1=createInput("Enter Your Name Here");
this.input2=createInput("Enter Correct Option no.");

}
hide(){
    this.input1.hide();
    this.input2.hide();
    
}

display(){
    var title=createElement("h1")
    title.html("My Quiz Game");
    title.position(350,10);

    var question=createElement("h3");
    question.html("Question:- What starts and ends with letter 'E', but has only one letter?");
    question.position(100,80);

    var option1=createElement("h3");
    option1.html("1: Everyone");
    option1.position(150,120);

    var option2=createElement("h3");
    option2.html("2: Envelope");
    option2.position(150,140);

    var option3=createElement("h3");
    option3.html("3: Estimate");
    option3.position(150,160);

    var option4=createElement("h3");
    option4.html("4: Example");
    option4.position(150,180);

   this.input1.position(150,250);
   this.input2.position(350,250);
}


}