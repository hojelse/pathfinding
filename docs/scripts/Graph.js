"use strict";
// Graph implemented with an adjacency list
class Graph {
    constructor(V) {
        this.adjacencyList = [];
        this.V = V;
        for (let i = 0; i < V; i++)
            this.adjacencyList[i] = new LinkedList();
    }
    addEdge(from, to, weight = 1) {
        let edge = new Edge(from, to, weight);
        this.adjacencyList[from].add(edge);
    }
    getNeigborhoodOf(vertex) {
        return this.adjacencyList[vertex];
    }
    [Symbol.iterator]() {
        return new GraphIterator(this);
    }
}
class GraphIterator {
    constructor(graph) {
        this.i = 0;
        this.graph = graph;
    }
    next() {
        let adjacencyList = this.graph.adjacencyList;
        return {
            done: this.i === adjacencyList.length,
            value: this.i++,
        };
    }
}
