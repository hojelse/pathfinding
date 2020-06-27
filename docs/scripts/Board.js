"use strict";
// A table, UI and state component
// Keeping track of user input and the board state
class Board extends HTMLDivElement {
    constructor() {
        super();
        this.gridGraph = new GridGraph(5, 5);
    }
}
customElements.define('table-board', Board, { extends: 'div' });
