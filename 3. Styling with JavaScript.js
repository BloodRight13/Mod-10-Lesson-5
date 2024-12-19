function changeColor() {
    let box = document.getElementById("box");
    box.style.backgroundColor = box.style.backgroundColor === 'lightblue' ? 'lightcoral' : 'lightblue';
}

function scaleUp() {
    let circle = document.getElementById("circle");
    circle.style.transform = 'scale(1.2)';
}

function scaleDown() {
    let circle = document.getElementById("circle");
    circle.style.transform = 'scale(1)';
}

function toggleVisibility() {
    let text = document.getElementById("text");
    text.style.display = text.style.display === 'none' ? 'block' : 'none';
}

function changeRectangleColor() {
    let rectangle = document.getElementById("rectangle");
    rectangle.style.backgroundColor = rectangle.style.backgroundColor === 'grey' ? 'yellow' : 'grey';
}
