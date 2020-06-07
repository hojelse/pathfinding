class LinkedList{
  head: LinkedListNode | null;

  constructor(){
      this.head = null;
  }

  add (n: number) {
    if(this.head == null) {
      this.head = new LinkedListNode(n);
    } else {
      this.head = new LinkedListNode(n, this.head);
    }
  }

  [Symbol.iterator]() : LinkedListIterator {
    return new LinkedListIterator(this);
  }
}

class LinkedListNode {
  data: number;
  next: LinkedListNode|null;
  constructor(data: number, next:LinkedListNode|null = null){
      this.data = data,
      this.next = next
  }
}

class LinkedListIterator implements Iterator<number> {
  nextNode:LinkedListNode;
  linkedList:LinkedList;

  constructor(linkedList:LinkedList) {
    this.linkedList = linkedList;
    this.nextNode = linkedList.head;
  }

  next() : IteratorResult<number> { //TODO refactor
    let currentNode:LinkedListNode = this.nextNode;
    if (currentNode == null) return {
      done : true,
      value : 0
    }
    this.nextNode = currentNode.next;
    return {
      done : currentNode == null,
      value : currentNode.data,
    }
  }
}