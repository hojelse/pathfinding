"use strict";
class MinPQ {
    constructor() {
        this.pq = [];
        this.N = 0;
    }
    insert(k, value) {
        this.pq[++this.N] = value;
    }
}
