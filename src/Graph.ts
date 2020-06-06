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
}