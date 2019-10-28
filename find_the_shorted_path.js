const shortestPath = (graph, startNode) => {
  let distance = {};

  for (node in graph) {
    distance[node] = Infinity;
  }
  distance[startNode] = 0;

  let unvisited = new Set(Object.keys(graph));
  let previous = {};

  while (unvisited.size > 0) {
    let currNode = minDistance(unvisited, distance);
    unvisited.delete(currNode);

    for (let neighbor in graph[currNode]) {
      let distanceFromCurrToNeighbor = graph[currNode][neighbor];
      let totalDistance = distanceFromCurrToNeighbor + distance[currNode];

      if (totalDistance < distance[neighbor]) {
        distance[neighbor] = totalDistance;
        previous[neighbor] = currNode;
      }
    }
  }

  return { distance, previous };
}

const minDistance = (nodes, distance) => {
  return Array.from(nodes).reduce((minNode, currNode) => {
    return ( distance[minNode] > distance[currNode] ? currNode : node );
  })
}
