"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _distTo, _edgeTo, _pq;
class Dijkstra {
    constructor(graph, startVertex) {
        _distTo.set(this, void 0);
        _edgeTo.set(this, void 0);
        _pq.set(this, void 0);
        __classPrivateFieldSet(this, _edgeTo, new Array(graph.V));
        __classPrivateFieldSet(this, _distTo, new Array(graph.V));
        __classPrivateFieldSet(this, _pq, new MinPQ(graph.V));
        for (let v = 0; v < graph.V; v++)
            __classPrivateFieldGet(this, _distTo)[v] = Infinity;
        __classPrivateFieldGet(this, _distTo)[startVertex] = 0;
        __classPrivateFieldGet(this, _pq).insert(startVertex, 0);
        while (!__classPrivateFieldGet(this, _pq).isEmpty())
            this.relax(graph, __classPrivateFieldGet(this, _pq).popMin());
    }
    relax(graph, fromVertex) {
        for (const edge of graph.getNeigborhoodOf(fromVertex)) {
            let toVertex = edge.to;
            if (__classPrivateFieldGet(this, _distTo)[toVertex] > __classPrivateFieldGet(this, _distTo)[fromVertex] + edge.weight) {
                __classPrivateFieldGet(this, _distTo)[toVertex] = __classPrivateFieldGet(this, _distTo)[fromVertex] + edge.weight;
                __classPrivateFieldGet(this, _edgeTo)[toVertex] = edge;
                if (__classPrivateFieldGet(this, _pq).contains(toVertex))
                    __classPrivateFieldGet(this, _pq).changeKey(toVertex, __classPrivateFieldGet(this, _distTo)[toVertex]);
                else
                    __classPrivateFieldGet(this, _pq).insert(toVertex, __classPrivateFieldGet(this, _distTo)[toVertex]);
            }
        }
    }
    distTo(vertex) {
        return __classPrivateFieldGet(this, _distTo)[vertex];
    }
    hasPathTo(vertex) {
        return __classPrivateFieldGet(this, _distTo)[vertex] < Infinity;
    }
    pathTo(vertex) {
        if (!this.hasPathTo(vertex))
            return null;
        let path = new Array();
        for (let edge = __classPrivateFieldGet(this, _edgeTo)[vertex]; edge != null; edge = __classPrivateFieldGet(this, _edgeTo)[edge.from]) {
            path.push(edge);
        }
        return path;
    }
}
_distTo = new WeakMap(), _edgeTo = new WeakMap(), _pq = new WeakMap();
