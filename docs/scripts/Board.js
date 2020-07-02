"use strict";
// Custom DOM element
// Keeping track of user input and the board state
class Board extends HTMLDivElement {
    constructor() {
        super();
        this.originNode = 0;
        this.goalNode = 24;
        this.state = [
            ['node', 'node', 'node', 'node', 'node'],
            ['node', 'node', 'node', 'node', 'node'],
            ['node', 'node', 'node', 'node', 'node'],
            ['node', 'node', 'node', 'node', 'node'],
            ['node', 'node', 'node', 'node', 'node']
        ];
        this.gridGraph = new GridGraph(this.state);
    }
    drawNewPath() {
        this.algorithm = new Dijkstra(gridGraph, this.originNode);
        let dijkstra = this.algorithm;
        let pathStack = dijkstra.getPathTo(this.goalNode);
        let path = this.formatPath(pathStack);
        let dist = dijkstra.getDistTo(this.goalNode);
        this.clearTable();
        this.drawOriginNode(this.originNode);
        this.drawGoalNode(this.goalNode);
        this.drawPath(path);
        this.drawEdgeToTree();
    }
    drawEdgeToTree() {
        document.querySelectorAll(".node").forEach(node => {
            node.classList.remove("up");
            node.classList.remove("right");
            node.classList.remove("down");
            node.classList.remove("left");
        });
        let edgeTo = this.algorithm.edgeTo;
        edgeTo.forEach(edge => {
            let fromCoord = this.gridGraph.idToCoords(edge.from);
            let up = this.gridGraph.coordsToId(fromCoord.col, fromCoord.row - 1);
            let right = this.gridGraph.coordsToId(fromCoord.col + 1, fromCoord.row);
            let down = this.gridGraph.coordsToId(fromCoord.col, fromCoord.row + 1);
            let left = this.gridGraph.coordsToId(fromCoord.col - 1, fromCoord.row);
            let fromNode = document.querySelector("[data-id='" + edge.from + "']");
            switch (edge.to) {
                case up:
                    fromNode.classList.add("up");
                    break;
                case right:
                    fromNode.classList.add("right");
                    break;
                case down:
                    fromNode.classList.add("down");
                    break;
                case left:
                    fromNode.classList.add("left");
                    break;
                default:
                    break;
            }
        });
    }
    formatPath(pathStack) {
        let path = [pathStack[pathStack.length - 1].from];
        let ii = 1;
        for (let i = pathStack.length - 1; i >= 0; i--) {
            path[ii] = pathStack[i].to;
            ii++;
        }
        return path;
    }
    clearTable() {
        let nodes = document.querySelectorAll('div.node');
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            for (let j = 0; j < nodeClasses.length; j++) {
                const nodeClass = nodeClasses[j];
                node.classList.remove(nodeClass);
            }
        }
    }
    drawOriginNode(originNode) {
        document.querySelector("[data-id='" + originNode + "']").classList.add("origin");
    }
    drawGoalNode(goalNode) {
        document.querySelector("[data-id='" + goalNode + "']").classList.add("goal");
    }
    drawPath(path) {
        for (let i = 0; i < path.length; i++) {
            let node = document.querySelector("[data-id='" + path[i] + "']");
            node.classList.add("path");
        }
    }
    setupGridDemo() {
        let rows = this.state.length;
        let cols = this.state[0].length;
        let table = document.querySelector('table-board');
        // this.classList.add("table");
        table.style.gridTemplateRows = "repeat(" + rows + ",1fr)";
        table.style.gridTemplateColumns = "repeat(" + cols + ",1fr)";
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                let node = newNode(col, row);
                table.appendChild(node);
            }
        }
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
            board.goalNode = eval(node.dataset.id);
            board.drawNewPath();
        }
        function handleMouseEnter(e) {
            if (!isMouseDown)
                return;
            let node = e.currentTarget;
            if (node.classList.contains("goal") || node.classList.contains("origin"))
                return;
            board.goalNode = eval(node.dataset.id);
            board.drawNewPath();
        }
        function coordToNodeID(x, y) {
            return x + y * cols;
        }
    }
}
customElements.define('table-board', Board, { extends: 'div' });
// let letters:string[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
