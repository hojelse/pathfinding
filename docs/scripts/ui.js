"use strict";
let form = document.querySelector('form');
let originInput = document.querySelector('#origin');
let goalInput = document.querySelector('#goal');
let toggleMST = document.querySelector('#toggleMST');
let toggleGraph = document.querySelector('#toggleGraph');
let tableBoard = document.querySelector('table-board');
form.addEventListener('submit', e => {
    e.preventDefault();
    handleSubmit();
}, false);
function handleSubmit() {
    board.originNode = letters.indexOf(originInput.value);
    board.goalNode = letters.indexOf(goalInput.value);
    board.drawNewPath();
}
window.onresize = resizeTable;
let aHeight = 1;
let aWidth = 1;
let tableWrapper = document.querySelector('.boardWrapper');
let table = document.querySelector('table-board');
function resizeTable() {
    const pageConainerIsWide = tableWrapper.offsetHeight / tableWrapper.offsetWidth < aHeight;
    if (pageConainerIsWide) {
        tableWrapper.style.flexDirection = "column";
        table.style.width = tableWrapper.offsetHeight * aWidth + "px";
        table.style.height = "auto";
    }
    else {
        tableWrapper.style.flexDirection = "row";
        table.style.height = tableWrapper.offsetWidth * aHeight + "px";
        table.style.width = "auto";
    }
}
toggleMST.addEventListener('click', e => {
    if (toggleMST.checked) {
        tableBoard.classList.add("showMST");
    }
    else {
        tableBoard.classList.remove("showMST");
    }
}, false);
toggleGraph.addEventListener('click', e => {
    if (toggleGraph.checked) {
        tableBoard.classList.add("showGraph");
    }
    else {
        tableBoard.classList.remove("showGraph");
    }
}, false);
