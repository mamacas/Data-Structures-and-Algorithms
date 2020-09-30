'use strict';

const Graph = require('../../../data-structures/graph/graph.js').Graph;

const getEdges = require('../getEdges/get-edges.js').getEdges;

describe('Get Edges from Itinerary', () => {

  it('should return true with the price for flights with destinations that are a direct connection to the origin', () => {

    let graph = new Graph();
    let la = graph.addVertex('Los Angeles');
    let sea = graph.addVertex('Seattle');
    let chi = graph.addVertex('Chicago');
    let nyc = graph.addVertex('New York');
    let lon = graph.addVertex('London');
    let ist = graph.addVertex('Istanbul');
    let mar = graph.addVertex('Marrakesch');
    let mil = graph.addVertex('Milan');
    let seo = graph.addVertex('Seoul');

    graph.addEdge(la, sea, 125);
    graph.addEdge(la, chi, 135);
    graph.addEdge(la, nyc, 285);

    graph.addEdge(sea, nyc, 265);
    graph.addEdge(sea, chi, 115);

    graph.addEdge(chi, nyc, 85);

    graph.addEdge(nyc, lon, 620);
    graph.addEdge(nyc, mil, 775);

    graph.addEdge(lon, mar, 240);
    graph.addEdge(lon, mil, 50);
    graph.addEdge(lon, ist, 140);

    graph.addEdge(mar, ist, 235);
    graph.addEdge(mar, mil, 130);

    graph.addEdge(mil, ist, 275);

    graph.addEdge(ist, seo, 680);

    let arr = [la.value, sea.value];
    let result = getEdges(graph, arr);

    expect(result).toEqual([true, 125]);
  });

  it('should return false if origin and destination are not direct connections', () => {

    let graph = new Graph();
    let la = graph.addVertex('Los Angeles');
    let sea = graph.addVertex('Seattle');
    let chi = graph.addVertex('Chicago');
    let nyc = graph.addVertex('New York');
    let lon = graph.addVertex('London');
    let ist = graph.addVertex('Istanbul');
    let mar = graph.addVertex('Marrakesch');
    let mil = graph.addVertex('Milan');
    let seo = graph.addVertex('Seoul');

    graph.addEdge(la, sea, 125);
    graph.addEdge(la, chi, 135);
    graph.addEdge(la, nyc, 285);

    graph.addEdge(sea, nyc, 265);
    graph.addEdge(sea, chi, 115);

    graph.addEdge(chi, nyc, 85);

    graph.addEdge(nyc, lon, 620);
    graph.addEdge(nyc, mil, 775);

    graph.addEdge(lon, mar, 240);
    graph.addEdge(lon, mil, 50);
    graph.addEdge(lon, ist, 140);

    graph.addEdge(mar, ist, 235);
    graph.addEdge(mar, mil, 130);

    graph.addEdge(mil, ist, 275);

    graph.addEdge(ist, seo, 680);

    let arr = [la.value, lon.value];
    let result = getEdges(graph, arr);

    expect(result).toEqual([false, 0]);
  });
});
