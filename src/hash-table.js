import LinkedList from "./linked-list";

class HashTable {
  constructor(size = 2069) {
    this._storage = [];
    this._tableSize = size;
    this._currentSize = 0;
  }

  /**
   * Insert a new element in the hash table
   * @param key Key for indexing
   * @param value Data to insert
   */
  insert(key, value) {
    let index = this._hash(key, this._tableSize);

    if (!this._storage[index]) this._storage[index] = new LinkedList();

    let pair = new LinkedList(key);
    pair.add(value);
    this._storage[index].add(pair);
    this._currentSize++;

    if (this._isHalfSizeReached()) {
      this._resizing();
    }
  }

  /**
   * Retrieve the value stored at the key index.
   *
   * @param key Data's key to retrieve
   * @returns the value bound to the key
   */
  retrieve(key) {
    const index = this._hash(key, this._tableSize);
    if (this._storage[index]) {
      let iterator = this._storage[index].values();
      let item = iterator.next();

      while (!item.done) {
        let pair = item.value;
        if (pair.isHead(key)) {
          return pair.getTail();
        }
        item = iterator.next();
      }
    }
    return null;
  }

  /**
   * Check if the hashTable is half full.
   * @returns true if the hasht able is half full
   */
  _isHalfSizeReached() {
    return this._currentSize >= this._tableSize / 2;
  }

  /**
   * Resize the hash table by reindexing all the values of the table
   * into a new doubled size table.
   */
  _resizing() {
    console.log("Resize in progress...");
    let newStorage = [];
    this._tableSize = this._tableSize * 2;

    this._storage.forEach(element => {
      let storageAtIndex = element.values();
      let item = storageAtIndex.next();
      while (!item.done) {
        let data = item.value;
        let newIndex = this._hash(data.getHead(), this._tableSize);
        if (!newStorage[newIndex]) newStorage[newIndex] = new LinkedList();

        let pair = new LinkedList(data.getHead());
        pair.add(data.getTail());
        newStorage[newIndex].add(pair);

        item = storageAtIndex.next();
      }
    });
    this._storage = newStorage;
  }

  /**
   * Hashing function for generating the table index
   * @param str Key to hash
   * @param n Table size
   * @returns the key's index
   */
  _hash(str, n) {
    let sum = 0;
    for (let index = 0; index < str.length; index++) {
      sum += str.charCodeAt(index) * 3;
    }

    return sum % n;
  }
}

export default HashTable;
