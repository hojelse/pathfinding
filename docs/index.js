"use strict";
let graph = new Graph(5);
let dist = [];
let prev = [];
function dijkstra(graph, source) {
    let Q = new MinPQ();
    dist[source] = 0;
    for (const v of graph) {
        if (v !== source) {
            dist[v] = Infinity;
            prev[v] = null;
        }
    }
}
dijkstra(graph, 0);
