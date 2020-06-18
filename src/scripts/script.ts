const nodeClasses = ["origin","goal","wall","path"];

let graph = new Graph(25);
setupGridDemo();

let originNode = 0;
let goalNode = 24;

drawNewPath(originNode, goalNode);

function drawNewPath(originNode:number, goalNode:number) {
  let d = new Dijkstra(graph, originNode);

  let pathStack = d.pathTo(goalNode);
  let path = formatPath(pathStack);
  let dist = d.distTo(goalNode);

  clearTable();
  drawOriginNode(originNode);
  drawGoalNode(goalNode);
  drawPath(path);
}

function clearTable() {
  let nodes:NodeListOf<HTMLDivElement> = document.querySelectorAll('div.node');
  for (let i = 0; i < nodes.length; i++) {
    const node:HTMLDivElement = nodes[i];
    for (let j = 0; j < nodeClasses.length; j++) {
      const nodeClass:string = nodeClasses[j];
      node.classList.remove(nodeClass);
    }
  }
  
}
function drawOriginNode(originNode:number) {
  document.querySelector("[data-id='" + originNode + "']").classList.add("origin");
}

function drawGoalNode(goalNode:number) {
  document.querySelector("[data-id='" + goalNode + "']").classList.add("goal");
}

function drawPath(path:number[]) {
  for (let i = 0; i < path.length; i++) {
    let node = document.querySelector("[data-id='" + path[i] + "']");
    node.classList.add("path");
  }
}

function formatPath(pathStack:Edge[]) {
  let path = [pathStack[pathStack.length - 1].from];
  let ii = 1;
  for (let i = pathStack.length - 1; i >= 0; i--) {
    path[ii] = pathStack[i].to;
    ii++;
  }
  return path;
}

function setupGridDemo() {
  let tableWrapper = document.querySelector(".tableWrapper");

  let rows = 5;
  let cols = 5;

  let table:HTMLTableElement = document.querySelector('.table');
  table.classList.add("table");
  table.style.gridTemplateRows = "repeat("+rows+",1fr)";
  table.style.gridTemplateColumns = "repeat("+cols+",1fr)";

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let node = newNode(col,row);
      table.appendChild(node);
    }
  }

  tableWrapper.appendChild(table);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      addOutEdges(col, row);
    }
  }

  function addOutEdges(col: number, row: number) {
    const leftEdge = (col == 0);
    const rightEdge = (col == cols - 1);
    const topEdge = (row == 0);
    const bottomEdge = (row == rows - 1);

    let currentNodeID = coordToNodeID(col, row);
    if (!topEdge) graph.addEdge(currentNodeID, coordToNodeID(col, row - 1));
    if (!rightEdge) graph.addEdge(currentNodeID, coordToNodeID(col + 1, row));
    if (!bottomEdge) graph.addEdge(currentNodeID, coordToNodeID(col, row + 1));
    if (!leftEdge) graph.addEdge(currentNodeID, coordToNodeID(col - 1, row));
  }

  function newNode(x:number,y:number) {
    let div = document.createElement("DIV");
    div.classList.add("node");
    div.innerText = coordToNodeID(x,y).toString();
    div.dataset.id = coordToNodeID(x,y).toString();
    div.dataset.x = x.toString();
    div.dataset.y = y.toString();
    return div;
  }

  function coordToNodeID(x:number, y:number):number {
    return coordToNodeIDGeneral(x, y, cols);
  }

  function setAsOrigin(x:number, y:number) {
    
  }
}

function coordToNodeIDGeneral(x:number, y:number, cols:number):number {
  return x + y*cols;
}