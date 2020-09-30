'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(origin, destination, weight=null) {
    this.origin = origin;
    this.destination = destination;
    this.weight = weight;
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

  addEdge(vertexA, vertexB, weight) {

    let edgeAB = new Edge(vertexA, vertexB, weight);
    let edgeBA = new Edge(vertexB, vertexA, weight);
    this.edges[vertexA.value].push(edgeAB);
    this.edges[vertexB.value].push(edgeBA);
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

      this.edges[front.value].forEach(edge => {
        if (!visited.includes(edge.origin.value)) {
          visited.push(edge.origin);
          queue.enqueue(edge.origin);
        }
      });

    }

    return visited;

  }

}

module.exports = { Graph, Vertex };
