"use strict";
class MinPQ {
    constructor(initCapacity = 1, keys = null) {
        this.pq = [];
        this.n = 0;
        if (keys == null) {
            this.pq = [initCapacity + 1];
            this.n = 0;
        }
        else {
            this.n = keys.length;
            this.pq = [keys.length + 1];
            for (let i = 0; i < this.n; i++)
                this.pq[i + 1] = keys[i];
            for (let k = this.asInt(this.n / 2); k >= 1; k--)
                this.sink(k);
        }
    }
    isEmpty() {
        return this.n == 0;
    }
    size() {
        return this.n;
    }
    getMin() {
        if (this.isEmpty())
            throw new Error("Priority queue underflow");
        return this.pq[1];
    }
    resize(capacity) {
        let temp = [capacity];
        for (let i = 1; i <= this.n; i++) {
            temp[i] = this.pq[i];
        }
        this.pq = temp;
    }
    insert(x) {
        if (this.n == this.pq.length - 1)
            this.resize(2 * this.pq.length);
        this.pq[++this.n] = x;
        this.swim(this.n);
    }
    popMin() {
        if (this.isEmpty())
            throw new Error("Priority queue underflow");
        let min = this.pq[1];
        this.swap(1, this.n--);
        this.sink(1);
        this.pq[this.n + 1] = null;
        if ((this.n > 0) && (this.n == (this.pq.length - 1) / 4))
            this.resize(this.pq.length / 2);
        return min;
    }
    // Heap helper functions
    swim(k) {
        while (k > 1 && this.firstGreaterThanSecond(this.asInt(k / 2), k)) {
            this.swap(k, this.asInt(k / 2));
            k = this.asInt(k / 2);
        }
    }
    sink(k) {
        while (2 * k <= this.n) {
            let j = 2 * k;
            if (j < this.n && this.firstGreaterThanSecond(j, j + 1))
                j++;
            if (!this.firstGreaterThanSecond(k, j))
                break;
            this.swap(k, j);
            k = j;
        }
    }
    firstGreaterThanSecond(i, j) {
        return this.pq[i] > this.pq[j];
    }
    swap(a, b) {
        [this.pq[a], this.pq[b]] = [this.pq[b], this.pq[a]]; // one-line swap with destructuring
    }
    asInt(x) {
        return Math.floor(x);
    }
}
