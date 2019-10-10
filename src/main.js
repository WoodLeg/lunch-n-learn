import Stack from "./stack";
import Queue from "./queue";
import LinkedList from "./linked-list";
import HashTable from "./hash-table";
import Graph from "./graph";
import Vertex from "./vertex";

const myStack = new Stack();
const myQueue = new Queue();
const myLList = new LinkedList();
const hashTable = new HashTable();
const graph = new Graph(true);

let paris = new Vertex("Paris", { city: "Paris", zipcode: 75000 });
let clamart = new Vertex("Clamart", { city: "Clamart", zipcode: 92140 });
let chatillon = new Vertex("Chatillon", { city: "Chatillon", zipcode: 92320 });
let pau = new Vertex("Pau", { city: "Pau", zipcode: 64000 });

graph.addVertex(paris);
graph.addVertex(clamart);
graph.addVertex(chatillon);
graph.addVertex(pau);

graph.addEdges(paris, clamart);
graph.addEdges(paris, chatillon);
graph.addEdges(paris, pau);
graph.addEdges(clamart, chatillon);
graph.addEdges(clamart, pau);

// console.log(graph);

graph.DFS(paris, vertex => {
  console.log(vertex.data);
});

console.log("=====");
graph.BFS(paris, vertex => {
  console.log(vertex.data);
});
