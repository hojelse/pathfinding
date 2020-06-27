"use strict";
let board = new Board();
const nodeClasses = ["origin", "goal", "wall", "path"];
let graph = new GridGraph(5, 5);
setupGridDemo();
let originNode = 0;
let goalNode = 24;
drawNewPath(originNode, goalNode);
function drawNewPath(originNode, goalNode) {
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
    let nodes = document.querySelectorAll('div.node');
    for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        for (let j = 0; j < nodeClasses.length; j++) {
            const nodeClass = nodeClasses[j];
            node.classList.remove(nodeClass);
        }
    }
}
function drawOriginNode(originNode) {
    document.querySelector("[data-id='" + originNode + "']").classList.add("origin");
}
function drawGoalNode(goalNode) {
    document.querySelector("[data-id='" + goalNode + "']").classList.add("goal");
}
function drawPath(path) {
    for (let i = 0; i < path.length; i++) {
        let node = document.querySelector("[data-id='" + path[i] + "']");
        node.classList.add("path");
    }
}
function formatPath(pathStack) {
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
    let table = document.querySelector('.table');
    table.classList.add("table");
    table.style.gridTemplateRows = "repeat(" + rows + ",1fr)";
    table.style.gridTemplateColumns = "repeat(" + cols + ",1fr)";
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let node = newNode(col, row);
            table.appendChild(node);
        }
    }
    tableWrapper.appendChild(table);
    function newNode(x, y) {
        let div = document.createElement("DIV");
        div.classList.add("node");
        div.innerText = coordToNodeID(x, y).toString();
        div.dataset.id = coordToNodeID(x, y).toString();
        div.dataset.x = x.toString();
        div.dataset.y = y.toString();
        div.addEventListener("mousedown", handleMouseDown);
        div.addEventListener("mouseup", handleMouseUp);
        div.addEventListener("mouseenter", handleMouseEnter);
        document.addEventListener("touchmove", handleTouchMove);
        return div;
    }
    let isMouseDown = false;
    let currentMovingGoal = null;
    function handleMouseDown(e) {
        let node = e.currentTarget;
        if (!node.classList.contains("goal"))
            return isMouseDown = false;
        isMouseDown = true;
        currentMovingGoal = eval(node.dataset.id);
    }
    function handleMouseUp(e) {
        isMouseDown = false;
    }
    function handleTouchMove(e) {
        if (e.changedTouches == null || e.changedTouches.length == 0)
            return;
        let touch = e.changedTouches[0];
        let node = document.elementFromPoint(touch.clientX, touch.clientY);
        if (node == null || node == undefined)
            return;
        if (!node.classList.contains("node"))
            return;
        if (node.classList.contains("goal") || node.classList.contains("origin"))
            return;
        goalNode = eval(node.dataset.id);
        drawNewPath(originNode, goalNode);
    }
    function handleMouseEnter(e) {
        if (!isMouseDown)
            return;
        let node = e.currentTarget;
        if (node.classList.contains("goal") || node.classList.contains("origin"))
            return;
        goalNode = eval(node.dataset.id);
        drawNewPath(originNode, goalNode);
    }
    function coordToNodeID(x, y) {
        return x + y * cols;
    }
}
