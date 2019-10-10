import Vertex from "./vertex";
import Stack from "./stack";
import Queue from "./queue";

class Graph {
  constructor(directed = false) {
    this._adjList = [];
    this._directed = directed;
  }

  addVertex(vertex) {
    if (typeof vertex === "object") {
      this._adjList[vertex.key] = { vertex, edges: vertex.edges };
    } else {
      throw new TypeError("Argument should be of type 'Vertex'");
    }
  }

  addEdges(vertex1, vertex2) {
    this._adjList[vertex1.key].edges.push(vertex2);

    if (this._directed) {
      this._adjList[vertex2.key].edges.push(vertex1);
    }
  }

  removeVertex(vertex) {
    if (this._adjList[vertex.key]) {
      delete this._adjList[vertex.key];
    }

    const verteces = Object.keys(this._adjList);
    verteces.forEach(current => {
      if (!this._adjList[current.key]) return;
      let edges = this._adjList[current.key].edges;
      let index = edges.indexOf(vertex);
      if (index > -1) {
        edges.splice(index, 1);
      }
    });
  }

  DFS(startingVertex, cb) {
    const vStack = new Stack();
    const visited = {};

    vStack.push(startingVertex);
    visited[startingVertex.key] = true;

    while (vStack.length) {
      const current = vStack.pop();

      const neighbors = this._adjList[current.key].edges;

      cb(current);

      neighbors.forEach(neighbor => {
        if (!visited[neighbor.key]) {
          vStack.push(neighbor);
          visited[neighbor.key] = true;
        }
      });
    }
  }

  BFS(startingVertex, cb) {
    const vQueue = new Queue();
    const visited = {};

    vQueue.enqueue(startingVertex);
    visited[startingVertex.key] = true;

    while (vQueue.length) {
      const current = vQueue.dequeue();

      const neighbors = this._adjList[current.key].edges;

      cb(current);

      neighbors.forEach(neighbor => {
        if (!visited[neighbor.key]) {
          vQueue.enqueue(neighbor);
          visited[neighbor.key] = true;
        }
      });
    }
  }
}

export default Graph;
