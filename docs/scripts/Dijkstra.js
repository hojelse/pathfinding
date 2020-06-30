"use strict";
// Pathfinding algorithm Dijkstra that runs on a Graph
class Dijkstra {
    constructor(graph, startVertex) {
        this.edgeTo = new Array(graph.V);
        this.distTo = new Array(graph.V);
        this.pq = new MinPQ(graph.V);
        for (let v = 0; v < graph.V; v++)
            this.distTo[v] = Infinity;
        this.distTo[startVertex] = 0;
        this.pq.insert(startVertex, 0);
        while (!this.pq.isEmpty())
            this.relax(graph, this.pq.popMin());
    }
    relax(graph, fromVertex) {
        for (const edge of graph.getNeigborhoodOf(fromVertex)) {
            let toVertex = edge.to;
            if (this.distTo[toVertex] > this.distTo[fromVertex] + edge.weight) {
                this.distTo[toVertex] = this.distTo[fromVertex] + edge.weight;
                this.edgeTo[toVertex] = edge;
                if (this.pq.contains(toVertex))
                    this.pq.changeKey(toVertex, this.distTo[toVertex]);
                else
                    this.pq.insert(toVertex, this.distTo[toVertex]);
            }
        }
    }
    getDistTo(vertex) {
        return this.distTo[vertex];
    }
    hasPathTo(vertex) {
        return this.distTo[vertex] < Infinity;
    }
    getPathTo(vertex) {
        if (!this.hasPathTo(vertex))
            return null;
        let path = new Array();
        for (let edge = this.edgeTo[vertex]; edge != null; edge = this.edgeTo[edge.from]) {
            path.push(edge);
        }
        return path;
    }
}
