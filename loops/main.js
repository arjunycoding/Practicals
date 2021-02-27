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
      answerContent.innerHTML = "<img src='images/fireworks.gif' width='200'/>";
      // answerContent.innerHTML = "right";
    } else {
          answerContent.innerHTML = "<img src='images/wrong.gif' width='200'/>";
        // answerContent.innerHTML = "worng";
    }
  }
  // for loop
  function printTimesTable(){
    let timesTable = document.getElementById("timesTable").value;
    let timesTableContent = document.getElementById("timesTableContent");
    for(let i = 1; i <= 12; i++){
      // timesTableContent.innerHTML = `${timesTable} x ${i} = ${timesTable * i}`;
      timesTableContent.innerHTML +=  i + " x " + i + " = " + timesTable * i + "<br/>";
    }
  }