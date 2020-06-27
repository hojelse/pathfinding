"use strict";
class GridGraph extends Graph {
    constructor(rows, columns) {
        super(rows * columns);
        this.rows = rows;
        this.cols = columns;
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
