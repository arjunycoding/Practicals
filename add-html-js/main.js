// function makeElement(element, idAndName, className, targetElement, typeAttribute, content){
//     let divContent = document.getElementById("divContent");
//     let el = document.createElement(element);
//     el.setAttribute("type", typeAttribute);
//     el.innerHTML = content;

// }

function makeInput(){
    let divContent = document.getElementById("divContent");
    let el = document.createElement("input");
    el.setAttribute("type", "number");
    el.setAttribute("id", "age")
    divContent.appendChild(el);

}
function makeElement(element, id, className, targetElement, type, content, onclick){
    let el = document.createElement(element);
    el.setAttribute("id", id);
    el.setAttribute("class", className);
    el.setAttribute("type", type);
    el.setAttribute("onclick", onclick);
    el.innerHTML = content;
    targetElement.appendChild(el);

}

let divContent = document.getElementById("divContent");
makeElement("p", "question1", "question", divContent, "", "What Is Your Age?");
makeElement("input", "answer1", "answer", divContent, "number", "", "");

makeElement("p", "question2", "question", divContent, "", "What Is Your Fist Name?");
makeElement("input", "answer2", "answer", divContent, "text", "", "");

makeElement("p", "question3", "question", divContent, "", "What Is Your Last Name?");
makeElement("input", "answer3", "answer", divContent, "text", "", "");

makeElement("p", "question4", "question", divContent, "", "How many members are in your family?");
makeElement("input", "answer4", "answer", divContent, "number", "", "");

makeElement("p", "question5", "question", divContent, "", "What Is Your favortie color?");
makeElement("input", "answer5", "answer", divContent, "text", "", "");

makeElement("p", "question6", "question", divContent, "", "What Is Your favorite season?");
makeElement("input", "answer6", "answer", divContent, "text", "", "");

makeElement("button", "button", "button", divContent, "text", "Submit", "displayInfo()");

function displayInfo(){
    let age = document.getElementById("answer1").value;
    let fn = document.getElementById("answer2").value;
    let ln = document.getElementById("answer3").value;
    let members = document.getElementById("answer4").value;
    let favColor = document.getElementById("answer5").value;
    let favSeason = document.getElementById("answer6").value;
    let divContent = document.getElementById("divContent");
    let ageContent = `You are ${age} years old`
    let fullnameContent = ` Your name is ${fn} ${ln}`;
    let membersContent = ` You have ${members} members in your family`;
    let colorContent = `${favColor} is your favorite color`;
    let seasonContent = `${favSeason} is your favorite season`;
    let content = `${ageContent} </br> ${fullnameContent} </br> ${membersContent} </br> ${colorContent} </br> ${seasonContent} </br>`;
    makeElement("div", "info", "info", divContent, "", content, "");
}