"use strict";
// Graph implemented with an adjacency list
var Graph = /** @class */ (function () {
    function Graph(V) {
        this.adj = [];
        this.V = V;
        for (var i = 0; i < V; i++)
            this.adj[i] = new LinkedList();
    }
    Graph.prototype.addEdge = function (from, to) {
        this.adj[from].add(to);
    };
    return Graph;
}());
