"use strict";
let graph = new Graph(5);
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(1, 2);
let dist = [];
let prev = [];
function dijkstra(graph, source) {
    let Q = new MinPQ();
    for (const v of graph) {
        if (v !== source) {
            dist[v] = Infinity;
            prev[v] = null;
            Q.insert(v);
        }
    }
    dist[source] = 0;
    while (!Q.isEmpty()) {
        let u = Q.popMin();
        for (const v of graph.getNeigborhoodOf(u)) {
        }
    }
}
dijkstra(graph, 5);
