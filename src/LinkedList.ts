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
}

class LinkedListNode {
  data: any;
  next: LinkedListNode|null;
  constructor(data: any, next:LinkedListNode|null = null){
      this.data = data,
      this.next = next
  }
}