'use strict';

const Graph = require('../graph/graph.js').Graph;
const Vertex = require('../graph/graph.js').Vertex;
const Edge = require('../graph/graph.js').Edge;

describe('Graph', () => {

  it('should add a new vertex to the graph\'s list of vertices', () => {
    const graph = new Graph();
    graph.addVertex('hello');

    expect(graph.list).toEqual([{value: 'hello', neighbors: []}]);
  });

  it('should add an edge between two vertices', () => {
    let nodeA = new Vertex('hello');
    let nodeB = new Vertex('there');

    const graph = new Graph([nodeA, nodeB]);
    // graph.addEdge(nodeA.value, nodeB.value);

    const edge = new Edge(nodeA, nodeB);
    graph.nodeA.addEdge(edge);
    graph.nodeB.addEdge(edge);
    expect(nodeA.neighbors).toEqual([nodeB]);
    expect(nodeB.neighbors).toEqual([nodeA]);
  });

  it('should return the entire list of vertices present in the graph when getVertices is called', () => {
    const graph = new Graph();
    graph.addVertex('hello');
    graph.addVertex('there');
    graph.addVertex('ma\'am');

    let list = graph.getVertices();

    expect(list).toEqual([
      { value: 'hello', neighbors: [] },
      { value: 'there', neighbors: [] },
      { value: 'ma\'am', neighbors: [] }
    ]);
  });

  it('should return the correct number of vertices present in the graph when getSize is called', () => {
    const graph = new Graph();
    graph.addVertex('hello');
    graph.addVertex('there');
    graph.addVertex('ma\'am');

    let size = graph.getSize();

    expect(size).toEqual(3);
  });


});
