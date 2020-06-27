
let form:HTMLFormElement = document.querySelector('form');
let originInput:HTMLInputElement = document.querySelector('#origin');
let goalInput:HTMLInputElement = document.querySelector('#goal');

form.addEventListener('submit', e => {
  e.preventDefault();
  handleSubmit();
}, false);

function handleSubmit(){
  const newOrigin = eval(originInput.value);
  const newGoal = eval(goalInput.value);
  board.drawNewPath();
}

window.onresize = resizeTable;
let aHeight = 1;
let aWidth = 1;
let tableWrapper:HTMLElement = document.querySelector('.tableWrapper');
let table:HTMLElement = document.querySelector('.table');

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