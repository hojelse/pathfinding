let letters:string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let graph = new Graph(25);
setupGridDemo();

let originNodeLetter = "A";
let goalNodeLetter = "Y";

let originNode = letters.indexOf(originNodeLetter);
let goalNode = letters.indexOf(goalNodeLetter);

let d = new Dijkstra(graph, originNode);

let path = d.pathTo(goalNode);
let pathLetters = createPathOfLetters(path);
console.log(pathLetters);
console.log("dist: " + d.distTo(goalNode));

document.querySelector("[data-id='"+originNode+"']").classList.add("origin");
document.querySelector("[data-id='"+goalNode+"']").classList.add("goal");

for (let i = 0; i < pathLetters.length; i++) {
  let node = document.querySelector("[data-id='" + letters.indexOf(pathLetters[i]) +"']");
  node.classList.add("path")
}

function createPathOfLetters(path:Edge[]) {
  let pathLetters = [letters[path[path.length - 1].from]];
  let ii = 1;
  for (let i = path.length - 1; i >= 0; i--) {
    pathLetters[ii] = letters[path[i].to];
    ii++;
  }
  return pathLetters;
}

function setupGridDemo() {
  let tableWrapper = document.querySelector(".tableWrapper");

  let rows = 5;
  let cols = 5;

  let table = document.createElement("TABLE");
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
    div.innerText = letters[coordToNodeID(x,y)];
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