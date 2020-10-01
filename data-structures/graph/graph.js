'use strict';

const Queue = require('../stacksAndQueues/stacks-and-queues.js').Queue;
const Stack = require('../stacksAndQueues/stacks-and-queues.js').Stack;

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

  depthFirst(root) {
    // console.log('root:', root);

    // this.edges[root.value].forEach(edge => {
    //   // console.log('edge of root val: ', edge.destination);
    // });

    let visited = [];
    let stack = new Stack();

    // push root node into a stack
    stack.push(root);
    visited.push(root);

    // console.log('stack:', stack);
    // console.log('visited arr:', visited);

    // while stack is not empty:
    while (!stack.isEmpty()) {
      // console.log(stack.top);
      // peek at top node,
      // let top = stack.top;
      // console.log('top value: ', stack.top.value);
      // if the top node has unvisited children:
      this.edges[stack.top.value].forEach(edge => {
        // console.log('edge: ', edge);
        if (!visited.includes(edge.destination)) {
        // mark the top node visited and push any unvisited children back into the stack
          visited.push(stack.pop());
          stack.push(edge.destination);
        } else {
          visited.push(edge.destination);
        }
      });
    }

    console.log('visited after loop:', visited);
    // repeat until empty
    // return list of nodes in order
    return visited;
  }

}

module.exports = { Graph, Vertex };
