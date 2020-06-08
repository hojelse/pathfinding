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
    [Symbol.iterator]() {
        return new LinkedListIterator(this);
    }
}
class LinkedListNode {
    constructor(data, next = null) {
        this.data = data,
            this.next = next;
    }
}
class LinkedListIterator {
    constructor(linkedList) {
        this.linkedList = linkedList;
        this.nextNode = linkedList.head;
    }
    next() {
        let currentNode = this.nextNode;
        if (currentNode == null)
            return {
                done: true,
                value: 0
            };
        this.nextNode = currentNode.next;
        return {
            done: currentNode == null,
            value: currentNode.data,
        };
    }
}
