function askColors(){
    // VARIBLES
    let numOfColors = document.getElementById("numOfColors").value;
    let favoriteColors = document.getElementById("favoriteColors");
    let i = 1;
    while(i <= numOfColors){
      favoriteColors.innerHTML += `Favorite Color ${i} <input type = "text" name = "color${i}" id = "color${i}"/> <br/><br/>`;
      i++;
    }
    // add submit button
    favoriteColors.innerHTML += `<button onclick = "displayColors()">Submit</button> <br/>`;
}

function displayColors(){
    // VARIBLES
    let numOfColors = document.getElementById("numOfColors").value;
    
    for(let i = 1; i <= numOfColors; i++){
        document.getElementById("displayColor").innerHTML += ` Color ${i} ${document.getElementById('color' + i).value} <br/>`;
    }
}

function reset(){
    let favoriteColorContent = document.getElementById("favoriteColorContent").innerHTML;
    favoriteColorContent = "";
}