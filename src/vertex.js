class Vertex {
  constructor(key, data) {
    this._key = key;
    this._data = data;
    this._edges = [];
  }

  get key() {
    return this._key;
  }

  get data() {
    return this._data;
  }

  get edges() {
    return this._edges;
  }

  addNeighbors(node) {
    this._edges.push(node);
  }
}

export default Vertex;
