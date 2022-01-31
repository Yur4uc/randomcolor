let head = document.getElementById("title");
let color;

function changeColor() {
    color = '#' + parseInt(Math.random() *
    0xFFFFFF).toString(16).padStart(6, '0');

    return head.style.color = color
}