
// let form:HTMLFormElement = document.querySelector('form');
// let originInput:HTMLInputElement = document.querySelector('#origin');
// let goalInput:HTMLInputElement = document.querySelector('#goal');
let toggleMST:HTMLInputElement = document.querySelector('#toggleMST');

let tableBoard:HTMLDivElement = document.querySelector('table-board');

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   handleSubmit();
// }, false);

// function handleSubmit(){
//   board.originNode = eval(originInput.value);
//   board.goalNode = eval(goalInput.value);
//   board.drawNewPath();
// }

window.onresize = resizeTable;
let aHeight = 1;
let aWidth = 1;
let tableWrapper:HTMLElement = document.querySelector('.boardWrapper');
let table:HTMLElement = document.querySelector('table-board');

function resizeTable() {
  const pageConainerIsWide = tableWrapper.offsetHeight / tableWrapper.offsetWidth < aHeight;
  if (pageConainerIsWide) {
      tableWrapper.style.flexDirection = "column";
      table.style.width = tableWrapper.offsetHeight * aWidth + "px";
      table.style.height = "auto";
  } else {
      tableWrapper.style.flexDirection = "row";
      table.style.height = tableWrapper.offsetWidth * aHeight + "px";
      table.style.width = "auto";
  }
}

toggleMST.addEventListener('click', e => {
  if(toggleMST.checked){
    tableBoard.classList.add("showMST");
  } else {
    tableBoard.classList.remove("showMST");
  }
}, false);

