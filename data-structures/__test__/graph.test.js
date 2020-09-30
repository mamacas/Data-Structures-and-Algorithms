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
    graph.addEdge(vertexA, vertexB, 100);
    expect(graph.edges[vertexA.value]).toEqual([{
      origin: { value: 'hello' },
      destination: { value: 'there' },
      weight: 100,
    }]);
    expect(graph.edges[vertexB.value]).toEqual([{
      origin: { value: 'there' },
      destination: { value: 'hello' },
      weight: 100,
    }]);
  });

  it('getNeighbors should return all neighbors of a vertex if there are vertices adjacent to the vertex', () => {
    const graph = new Graph();
    let vertexA = graph.addVertex('hello');
    let vertexB = graph.addVertex('there');
    graph.addEdge(vertexA, vertexB, null);
    let neighbors = graph.getNeighbors(vertexA);
    expect(neighbors).toEqual([{
      origin: { value: 'hello' },
      destination: { value: 'there' },
      weight: null,
    }]);
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

  it.skip('breadthFirst traversal should return a collection of all vertices connected by edges', () => {
    const graph = new Graph();
    let vertexA = graph.addVertex('hello');
    let vertexB = graph.addVertex('there');
    let vertexC = graph.addVertex('!!!');
    let vertexD = graph.addVertex('???');
    graph.addEdge(vertexA, vertexB, null);
    graph.addEdge(vertexA, vertexC, null);
    graph.addEdge(vertexB, vertexC, null);
    graph.addEdge(vertexC, vertexD, null);
    let result = graph.breadthFirst(vertexA);
    expect(result).toEqual([
      { value: 'hello' },
      { value: 'there' },
      { value: '!!!' },
      { value: '???' }
    ]);
  });

  it.skip('breadthFirst traversal should not return standalone vertices', () => {
    const graph = new Graph();
    let vertexA = graph.addVertex('hello');
    let vertexB = graph.addVertex('there');
    let vertexC = graph.addVertex('!!!');
    graph.addVertex('???');
    graph.addEdge(vertexA, vertexB);
    graph.addEdge(vertexA, vertexC);
    graph.addEdge(vertexB, vertexC);
    let result = graph.breadthFirst(vertexA);
    expect(result).toEqual([
      { value: 'hello' },
      { value: 'there' },
      { value: '!!!' }
    ]);
  });
});
