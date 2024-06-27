// Your code here
//moveDodgerLeft()
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0){
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (e){
    if (e.key === "ArrowLeft"){
        moveDodgerLeft();
    }
});

//moveDodgerRight
const dodgerWidth = 40; //dodger width is 40px
const gameWidth = 400; //gamefield has a height and width of 400px
function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left < gameWidth - dodgerWidth){
        dodger.style.left = `${left + 1}px`;
    }
    
}