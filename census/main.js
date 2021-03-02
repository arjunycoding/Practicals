function askMemberInfo(){
    let numOfMembers = document.getElementById("numOfMembers").value; 
    let requestOfInfo = document.getElementById("requestOfInfo"); 
    let i = 1;
    while(i <= numOfMembers){
        requestOfInfo.innerHTML += ` First Name : <input type = "text" name = "memberFn${i}" id = "memberFn${i}"/> `;
        requestOfInfo.innerHTML += ` Last Name : <input type = "text" name = "memberLn${i}" id = "memberLn${i}"/> `;
        requestOfInfo.innerHTML += ` Age : <input type = "number" name = "memberAge${i}" id = "memberAge${i}"/> `;
        requestOfInfo.innerHTML += `<br/><br/>`;
        i++;
    }
    // add submit button
    requestOfInfo.innerHTML += `<button onclick = "displayFamilyInfo()">Submit</button> <br/><br/>`; 
}

function displayFamilyInfo(){
    let numOfMembers = document.getElementById("numOfMembers").value; 
    let familyInfoContent = document.getElementById("familyInfoContent");   
    for(let i = 1; i <= numOfMembers; i++){
        familyInfoContent.innerHTML +=  document.getElementById(`memberFn${i}`).value + document.getElementById(`memberLn${i}`).value + ' is '  + document.getElementById(`memberAge${i}`).value + ' years old. <br/>  <br/>';
    }
}