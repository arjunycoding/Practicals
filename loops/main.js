function addColorContent(){
    let color = document.getElementById("inputColor").value;
    let contentColor = document.getElementById("ifLoopContent");
    
    if(color == "red" || color == "Red"){
      contentColor.innerHTML = "This is your favorite color: <font color='red'>Red</font>"
    } else if(color == "orange" || color == "Orange"){
    contentColor.innerHTML = "This is your favorite color: <font color = 'orange'>Orange</font>" 
    } else if(color == "yellow" || color == "Yellow"){
      contentColor.innerHTML = "This is your favorite color: <font color = 'yellow'>Yellow</font>"
    } else if(color == "green" || color == "Green"){
      contentColor.innerHTML = "This is your favorite color: <font color = 'green'>Green</font>"
    } else if(color == "blue" || color == "Blue"){
      contentColor.innerHTML = "This is your favorite color: <font color = 'blue'>Blue</font>"
    } else if(color == "purple" || color == "Purple"){
      contentColor.innerHTML = "This is your favorite color: <font color = 'purple'>Purple</font>"
    } else if(color == "pink" || color == "Pink"){
    contentColor.innerHTML = "This is your favorite color: <font color = 'pink'>Pink<font>" 
    } else {
            contentColor.innerHTML = " <font color = 'blue'>Sorry we could not find that color</font>"
    }
}
//
function addNumberContent(){
  var number = document.getElementById("loopNumber").value;
  var numberContent = document.getElementById("forLoopContent");
  var loopText = document.getElementById("loopText").value;
  for(let i = 0; i <= number; i++){
    numberContent.innerHTML += loopText + "<br/>"
  }
}

/**********************************
                MATH  
**********************************/
// if loop
function checkAnswer(){
    let answer = document.getElementById("answer").value;
    let answerContent = document.getElementById("answerContent");
    if(answer == 2){
      answerContent.innerHTML = "<img src='images/right.png' width='200'/>";
      // answerContent.innerHTML = "right";
    } else {
          answerContent.innerHTML = "<img src='images/wrong.png' width='200'/>";
        // answerContent.innerHTML = "worng";
    }
  }

  // Quiz 
  function checkAnswers(){
    // VARIABLES
    var qOne = document.getElementById("qOne").value; 
    var qTwo = document.getElementById("qTwo").value; 
    var qThree = document.getElementById("qThree").value; 
    var qFour = document.getElementById("qFour").value; 
    var qFive = document.getElementById("qFive").value; 
    var qSix = document.getElementById("qSix").value; 
    var qSeven = document.getElementById("qSeven").value; 
    var qEight = document.getElementById("qEight").value; 
    var qNine = document.getElementById("qNine").value; 
    var qTen = document.getElementById("qTen").value; 
    var score = document.getElementById("score"); 
    var endScore = 0;
    
    // IF LOOPS
    if(qOne == 2){
      endScore = (endScore + 1);
    }
    if(qTwo == 3){
      endScore = (endScore + 1);
    }
    if(qThree == 4){
      endScore = (endScore + 1);
    }
    if(qFour == 5){
      endScore = (endScore + 1);
    }
    if(qFive == 6){
      endScore = (endScore + 1);
    }
    if(qSix == 7){
      endScore = (endScore + 1);
    }
    if(qSeven == 8){
      endScore = (endScore + 1);
    }
    if(qEight == 9){
      endScore = (endScore + 1);
    }
    if(qNine == 10){
      endScore = (endScore + 1);
    }
    if(qTen == 11){
      endScore = (endScore + 1);
    }
    score.innerHTML =  `${endScore} /10`;
    if(score.innerHTML == "10 /10"){
        score.innerHTML += "<br/> <br/><img src = '../images/fireworks.gif'/>";
    }
  }

  // for loop
  function printTimesTable(){
    let timesTable = document.getElementById("timesTable").value;
    let timesTableContent = document.getElementById("timesTableContent");
    timesTableContent.innerHTML = "";
    for(let i = 1; i <= 10; i++){
      timesTableContent.innerHTML += `${timesTable} x ${i} = ${timesTable * i} <br/>`;
    }
  }

  //Code

  function runCode(){
    let code = document.getElementById("code").value;
    let outputCode = document.getElementById("outputCode");
    outputCode.innerHTML = code;
  }

