// Graph implemented with an adjacency list
class Graph {
  V: number; // number of verticies
  adjacencyList: LinkedList[] = [];
  
  constructor(V: number) {
    this.V = V;
    for (let i = 0; i < V; i++) this.adjacencyList[i] = new LinkedList();
  }

  addEdge(from: number, to: number) {
    this.adjacencyList[from].add(to);
  }

  [Symbol.iterator]() : GraphIterator {
    return new GraphIterator(this);
  }
}

class GraphIterator implements Iterator<number> {
  i:number = 0;
  graph:Graph

  constructor(graph:Graph) {
    this.graph = graph;
  }

  next() : IteratorResult<number> {
    let adjacencyList = this.graph.adjacencyList;
    return {
      done : this.i === adjacencyList.length -1,
      value : this.i++,
    }
  }
}

