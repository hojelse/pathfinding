"use strict";
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (n) {
        if (this.head == null) {
            this.head = new LinkedListNode(n);
        }
        else {
            this.head = new LinkedListNode(n, this.head);
        }
    };
    return LinkedList;
}());
