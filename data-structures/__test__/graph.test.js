'use strict';

const Graph = require('../graph/graph.js').Graph;

describe('Graph', () => {

  it('should add a vertex to the graph', () => {
    const graph = new Graph();
    graph.addVertex('hello');
    expect(graph.vertices).toEqual([{ value: 'hello' }]);
  });

  it('should add an edge between two vertices', () => {
    const graph = new Graph();
    let vertexA = graph.addVertex('hello');
    let vertexB = graph.addVertex('there');
    graph.addEdge(vertexA, vertexB);
    expect(graph.edges[vertexA.value]).toEqual([{value: 'there'}]);
    expect(graph.edges[vertexB.value]).toEqual([{ value: 'hello' }]);
  });

  it('getNeighbors should return all neighbors of a vertex if there are vertices adjacent to the vertex', () => {
    const graph = new Graph();
    let vertexA = graph.addVertex('hello');
    let vertexB = graph.addVertex('there');
    graph.addEdge(vertexA, vertexB);
    let neighbors = graph.getNeighbors(vertexA);
    expect(neighbors).toEqual([{ value: 'there' }]);
  });

  it('getNeighbors should return an empty array when a vertex has no neighbors', () => {
    const graph = new Graph();
    let vertexA = graph.addVertex('hello');
    let neighbors = graph.getNeighbors(vertexA);
    expect(neighbors).toEqual([]);
  });

  it('getVertices should return the entire list of vertices present in the graph', () => {
    const graph = new Graph();
    graph.addVertex('hello');
    graph.addVertex('there');

    let list = graph.getVertices();

    expect(list).toEqual([
      { value: 'hello' },
      { value: 'there' }
    ]);
  });

  it('getSize should return the correct number of vertices present in the graph', () => {
    const graph = new Graph();
    graph.addVertex('hello');
    graph.addVertex('there');

    let size = graph.getSize();

    expect(size).toEqual(2);
  });


});
