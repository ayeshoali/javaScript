let className = document.getElementsByClassName("content");

console.log(className);
console.log(className[0].innerHTML);
//Changing inner HTML
//className[0].innerHTML = "<h1> hi content is changed </h1>";

let tag = className[0].getElementsByTagName("h2");
//console.log(tag);

let timeout;

function changeInnerHTML(tag) {
    tag.innerHTML = " Hey, i have changed inner HTML";
}

let id = document.getElementById("intro");
console.log(id);

//setting and changing HTML attributes
id.setAttribute("alt", "hello");



//id.textContent = "changed content";
// function timeoutFun() {
//     timeout = setTimeout(changeInnerHTML(tag[0]), 500000);
// }
// timeoutFun();


//Changing CSS
id.setAttribute("style", "color: red");
id.style.color = "green";
id.style.backgroundColor = "yellow";

//ADDING ELEMENTS IN HTML

let newA = document.createElement("a");

className[0].appendChild(newA);
newA.innerHTML = " Link 6";
newA.setAttribute("href", "a");
newA.setAttribute("class", "link-6");


//REMOVE ELEMENTS
className[0].removeChild(newA);