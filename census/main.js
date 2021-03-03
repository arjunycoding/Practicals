function askMemberInfo(){
    let numOfMembers = document.getElementById("numOfMembers").value; 
    let requestOfInfo = document.getElementById("requestOfInfo"); 
    let i = 1;
    while(i <= numOfMembers){
        requestOfInfo.innerHTML += ` First Name : <input type = "text" name = "memberFn${i}"  class = "info" id = "memberFn${i}"/> `;
        requestOfInfo.innerHTML += ` Last Name : <input type = "text" name = "memberLn${i}" class = "info" id = "memberLn${i}"/> `;
        requestOfInfo.innerHTML += ` Age : <input type = "number" name = "memberAge${i}" class = "info" id = "memberAge${i}"/> `;
        requestOfInfo.innerHTML += `<br/><br/>`;
        i++;
    }
    // add submit button
    requestOfInfo.innerHTML += `<button onclick = "displayFamilyInfo()">Submit</button> <br/><br/>`; 
}

function displayFamilyInfo(){
    let numOfMembers = document.getElementById("numOfMembers").value; 
    let familyInfoContent = document.getElementById("familyInfoContent");  
    let familyInfoArray = document.getElementsByClassName("info"); 
    for(let i = 1; i <= familyInfoArray.length; i++){
        let fn = document.getElementById(`memberFn${i}`).value;
        let ln = document.getElementById(`memberLn${i}`).value;
        let age = document.getElementById(`memberAge${i}`).value;
        familyInfoContent.innerHTML +=  `${fn} ${ln} is ${age} years old. <br/><br/>`;
    }
}