class MinPQ {
  pq:number[] = [];
  N:number = 0;

  insert(k:number, value:number) {
    this.pq[++this.N] = value;
  }

}