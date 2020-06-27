class GridGraph extends Graph {
  rows:number;
  cols:number;

  constructor(rows:number, columns:number) {
    super(rows*columns);
    this.rows = rows;
    this.cols = columns;
  }

  coordsToId(col:number, row:number):number {
    return col + row * this.cols;
  }

  idToCoords(id:number):{col:number,row:number} {
    let col = id % this.cols;
    let row = Math.floor(id / this.cols);
    return {col: col,row: row};
  }

}