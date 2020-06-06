
let graph = new Graph(5);

let dist:number[] = [];
let prev:(number|null)[] = [];
function dijkstra(graph:Graph, source:number) {

  let Q:MinPQ = new MinPQ();

  dist[source] = 0;
  for (const v of graph) {
    if (v !== source) {
      dist[v] = Infinity;
      prev[v] = null;
    }
  }
}

dijkstra(graph, 0);
