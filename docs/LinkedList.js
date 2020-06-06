"use strict";
class LinkedList {
    constructor() {
        this.head = null;
    }
    add(n) {
        if (this.head == null) {
            this.head = new LinkedListNode(n);
        }
        else {
            this.head = new LinkedListNode(n, this.head);
        }
    }
}
class LinkedListNode {
    constructor(data, next = null) {
        this.data = data,
            this.next = next;
    }
}
