// Custom DOM element
// Keeping track of user input and the board state
class Board extends HTMLDivElement {
  gridGraph:GridGraph;
  state:string[][];
  originNode = 0;
  goalNode = 24;

  constructor() {
    super();
    this.state = [
      ['node', 'node', 'node', 'node', 'node'],
      ['node', 'node', 'node', 'node', 'node'],
      ['node', 'node', 'node', 'node', 'node'],
      ['node', 'node', 'node', 'node', 'node'],
      ['node', 'node', 'node', 'node', 'node']
    ]
    
    this.gridGraph = new GridGraph(this.state);
  }

  drawNewPath() {
    let d = new Dijkstra(gridGraph, this.originNode);
  
    let pathStack = d.pathTo(this.goalNode);
    let path = this.formatPath(pathStack);
    let dist = d.distTo(this.goalNode);
  
    this.clearTable();
    this.drawOriginNode(this.originNode);
    this.drawGoalNode(this.goalNode);
    this.drawPath(path);
  }

  formatPath(pathStack:Edge[]) {
    let path = [pathStack[pathStack.length - 1].from];
    let ii = 1;
    for (let i = pathStack.length - 1; i >= 0; i--) {
      path[ii] = pathStack[i].to;
      ii++;
    }
    return path;
  }
  
  clearTable() {
    let nodes:NodeListOf<HTMLDivElement> = document.querySelectorAll('div.node');
    for (let i = 0; i < nodes.length; i++) {
      const node:HTMLDivElement = nodes[i];
      for (let j = 0; j < nodeClasses.length; j++) {
        const nodeClass:string = nodeClasses[j];
        node.classList.remove(nodeClass);
      }
    }
  }
  
  drawOriginNode(originNode:number) {
    document.querySelector("[data-id='" + originNode + "']").classList.add("origin");
  }
  
  drawGoalNode(goalNode:number) {
    document.querySelector("[data-id='" + goalNode + "']").classList.add("goal");
  }
  
  drawPath(path:number[]) {
    for (let i = 0; i < path.length; i++) {
      let node = document.querySelector("[data-id='" + path[i] + "']");
      node.classList.add("path");
    }
  }

  setupGridDemo() {
    let rows = this.state.length;
    let cols = this.state[0].length;
  
    let table:HTMLDivElement = document.querySelector('table-board');
    // this.classList.add("table");
    table.style.gridTemplateRows = "repeat("+rows+",1fr)";
    table.style.gridTemplateColumns = "repeat("+cols+",1fr)";
  
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        let node = newNode(col,row);
        table.appendChild(node);
      }
    }
    
    function newNode(x:number,y:number) {
      let div = document.createElement("DIV");
      div.classList.add("node");
      div.innerText = coordToNodeID(x,y).toString();
      div.dataset.id = coordToNodeID(x,y).toString();
      div.dataset.x = x.toString();
      div.dataset.y = y.toString();
      div.addEventListener("mousedown", handleMouseDown)
      div.addEventListener("mouseup", handleMouseUp)
      div.addEventListener("mouseenter", handleMouseEnter)
      document.addEventListener("touchmove", handleTouchMove)
      return div;
    }
  
    let isMouseDown:boolean = false;
    let currentMovingGoal:number|null = null;
  
    function handleMouseDown(e:MouseEvent) {
      let node:HTMLDivElement = e.currentTarget as HTMLDivElement;
      if (!node.classList.contains("goal")) return isMouseDown = false;
      isMouseDown = true;
      currentMovingGoal = eval(node.dataset.id);
    }
  
    function handleMouseUp(e:MouseEvent) {
      isMouseDown = false;
    }
  
    function handleTouchMove(e:TouchEvent) {
      if (e.changedTouches == null || e.changedTouches.length == 0) return;
      let touch:Touch = e.changedTouches[0];
      let node:HTMLDivElement = document.elementFromPoint(touch.clientX, touch.clientY) as HTMLDivElement;
      if (node == null || node == undefined) return;
      if (!node.classList.contains("node")) return;
      if (node.classList.contains("goal") || node.classList.contains("origin")) return;
      board.goalNode = eval(node.dataset.id);   
      board.drawNewPath();
    }
  
    function handleMouseEnter(e:MouseEvent) {
      if (!isMouseDown) return;
      let node:HTMLDivElement = e.currentTarget as HTMLDivElement;
      if (node.classList.contains("goal") || node.classList.contains("origin")) return;
      board.goalNode = eval(node.dataset.id);
      board.drawNewPath();
    }
  
    function coordToNodeID(x:number, y:number):number {
      return x + y*cols;
    }
  
  }

}

customElements.define('table-board', Board, { extends: 'div' });