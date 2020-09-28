'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// class Edge {
//   constructor(vertexA, vertexB, weight=null) {
//     this.vertexA = vertexA;
//     this.vertexB = vertexB;
//     this.weight = weight;
//   }
// }

class Graph {

  constructor() {
    this.vertices = [];
    this.edges = [];
  }

  addVertex(value) {
    const vertex = new Vertex(value);

    this.vertices.push(vertex);

    this.edges[value] = [];

    return vertex;
  }

  addEdge(vertexA, vertexB) {
    this.edges[vertexA.value].push(vertexB);
    this.edges[vertexB.value].push(vertexA);
  }

  getNeighbors(vertex) {
    if (this.edges[vertex.value]) {
      return this.edges[vertex.value];
    }
  }

  getVertices() {
    return this.vertices;
  }


  getSize() {
    return this.vertices.length;
  }

}

module.exports = { Graph, Vertex };
