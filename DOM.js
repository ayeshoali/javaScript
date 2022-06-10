let className = document.getElementsByClassName("content");

console.log(className);
console.log(className[0].innerHTML);
//className[0].innerHTML = "<h1> hi content is changed </h1>";

let tag = className[0].getElementsByTagName("h2");
//console.log(tag);

let timeout;

function changeInnerHTML(tag) {
    tag.innerHTML = " Hey, i have changed inner HTML";
}

let id = document.getElementById("intro");
console.log(id);
id.textContent = "changed content";
// function timeoutFun() {
//     timeout = setTimeout(changeInnerHTML(tag[0]), 500000);
// }
// timeoutFun();