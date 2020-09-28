'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

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

  breadthFirst(start) {

    let visited = [];
    let queue = new Queue();
    queue.enqueue(start);
    visited.push(start);

    while (!queue.isEmpty()) {
      let front = queue.dequeue();

      this.edges[front.value].forEach(vertex => {
        if (!visited.includes(vertex)) {
          visited.push(vertex);
          queue.enqueue(vertex);
        }
      });

    }

    return visited;

  }

}

module.exports = { Graph, Vertex };
