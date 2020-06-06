"use strict";
class Heap {
    constructor() {
        this.a = [];
        this.N = 0;
    }
    insert(key) {
    }
    popMax() {
        return 0;
    }
    sink(k) {
        while (2 * k <= this.N) {
            let j = 2 * k;
            if (j < this.N && j < j + 1)
                j++;
            if (!(k < j))
                break;
            this.swap(k, j);
            k = j;
        }
    }
    swap(p, q) {
        [this.a[p], this.a[q]] = [this.a[q], this.a[p]]; // one-line swap with destructuring
    }
}
