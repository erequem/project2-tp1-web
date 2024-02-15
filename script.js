const color = document.querySelector("#color");
const number = document.querySelector("#size");
const selector = document.querySelector("#selector");
const text = document.querySelector("#text");

let colorvalue;
let numbervalue;
let selectValue;
color.addEventListener("change",(e) =>{
    colorvalue = e.target.value;
    text.style.color = colorvalue;
})
number.addEventListener("change",(e) =>{
    numbervalue = e.target.value;
    text.style.fontSize = numbervalue + "px";
})

selector.addEventListener("change",(e) =>{
    selectValue = e.target.value;
    text.style.fontFamily = selectValue;
})

