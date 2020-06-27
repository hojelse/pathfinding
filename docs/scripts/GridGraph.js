"use strict";
// Subclass of Graph
// where every node has a maximum of 4 outgoing and 4 ingoing edges
class GridGraph extends Graph {
    constructor(rows, columns) {
        super(rows * columns);
        this.rows = rows;
        this.cols = columns;
        this.setup();
    }
    setup() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.addOutEdges(col, row);
            }
        }
    }
    addOutEdges(col, row) {
        const leftEdge = (col == 0);
        const rightEdge = (col == this.cols - 1);
        const topEdge = (row == 0);
        const bottomEdge = (row == this.rows - 1);
        let currentNodeID = this.coordsToId(col, row);
        if (!topEdge)
            this.addEdge(currentNodeID, this.coordsToId(col, row - 1));
        if (!rightEdge)
            this.addEdge(currentNodeID, this.coordsToId(col + 1, row));
        if (!bottomEdge)
            this.addEdge(currentNodeID, this.coordsToId(col, row + 1));
        if (!leftEdge)
            this.addEdge(currentNodeID, this.coordsToId(col - 1, row));
    }
    coordsToId(col, row) {
        return col + row * this.cols;
    }
    idToCoords(id) {
        let col = id % this.cols;
        let row = Math.floor(id / this.cols);
        return { col: col, row: row };
    }
}
