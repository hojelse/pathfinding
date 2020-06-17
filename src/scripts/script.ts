
let graph = new Graph(8);
graph.addEdge(5,1);
graph.addEdge(0,2);
graph.addEdge(7,3);
graph.addEdge(0,4);
graph.addEdge(4,5);
graph.addEdge(3,6);
graph.addEdge(2,7);

let d = new Dijkstra(graph, 0);
console.log(d.pathTo(6));
console.log(d.distTo(6));

let n = 5;
let m = 5;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    console.log(n,m);
  }
}