'use strict';

class Vertex {
  constructor(value, neighbors=[]) {
    this.value = value;
    this.neighbors = neighbors;
  }
}

class Edge {
  constructor(vertexA, vertexB, weight=null) {
    this.vertexA = vertexA;
    this.vertexB = vertexB;
    this.weight = weight;
  }
}

class Graph {

  constructor(list=[]) {
    this.list = list;
  }

  addVertex(value) {

    // takes in a value
    // adds a node with that value to the graph
    const vertex = new Vertex(value);

    this.list.push(vertex);

    console.log(vertex);
    console.log(this.list);
    // returns the added node
    return vertex;

  }

  addEdge(valA, valB) {

    let nodeA;
    let nodeB;

    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].value === valA) {
        nodeA = this.list[i];
      }
      if (this.list[i].value === valB) {
        nodeB = this.list[i];
      }
    }

    const edge = new Edge(nodeA, nodeB);
    nodeA.addEdge(edge);
    nodeB.addEdge(edge);

    // takes in two nodes to be connected (should already be present in the graph)
    // adds a new edge between two nodes in the graph

    // include ability to add a weight

    console.log(nodeA, nodeB, edge);
  }

  getNeighbors(vertex) {

    // takes in a node

    // for (let i = 0; i < this.neighbors.length; i++) {
    //   if ()
    // }
    // returns a collection of edges connected to the node
    // include the weight of the connection in the returned collection

    console.log(vertex);
  }

  getVertices() {
    return this.list;
  }


  getSize() {
    return this.list.length;
  }

}

module.exports = { Graph, Edge, Vertex };
