'use strict';

// main function, returns end output
const hasDirectFlights = (graph, arr) => {

  let result = [false, 0];

  for (let i = 0; i < arr.length-1; i++) {
    let city1 = arr[i];
    let city2 = arr[i + 1];
    result = checkTwo(graph, city1, city2);
  }

  return result;
};

// helper function
const checkTwo = (graph, city1, city2) => {

  let result = [false, 0];

  graph.edges[city1].forEach(edge => {

    let destination = edge.destination.value;
    let price = 0;
    price += edge.weight;

    if (city2 === destination) {
      result = [true, price];
    }

  });

  return result;
};

module.exports = { hasDirectFlights , checkTwo };
