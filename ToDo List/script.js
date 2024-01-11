const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("li-cont");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listCont.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span); //display item
    }
    inputBox.value = " ";
    saveData();
}
listCont.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listCont.innerHTML);
}
function showTask(){
    listCont.innerHTML = localStorage.getItem("data");
}
