const txtcolor = document.querySelector("#color");
const btn = document.getElementById("btn");
const bg = document.getElementById("bg-color");



btn?.addEventListener('click', () => {
    var num :number = Math.floor( Math.random() * 256);

var color: string = `rgb(${num}, ${num}, ${num})`;
    bg?.style.backgroundColor = color;
    txtcolor.innerText = color;
    
})