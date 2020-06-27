let board = new Board();

const nodeClasses = ["origin","goal","wall","path"];

let gridGraph = board.gridGraph;
board.setupGridDemo();

board.drawNewPath();
