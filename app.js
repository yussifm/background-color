var txtcolor = document.querySelector("#color");
var btn = document.getElementById("btn");
var bg = document.getElementById("bg-color");
var head = document.getElementById('head');



btn.addEventListener('click', () => {
    var num1 = Math.floor(Math.random() * 255);
    var num2 = Math.floor(Math.random() * 255);
    var num3 = Math.floor(Math.random() * 255);

    var color = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";

    bg.style.backgroundColor = color;
    txtcolor.innerHTML = color;
    head.style.color = color;



});