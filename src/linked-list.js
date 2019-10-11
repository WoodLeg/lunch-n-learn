class LinkedList {
  constructor(value) {
    this._length = 0;
    if (value) {
      this._head = { value, next: null };
      this._length++;
    } else {
      this._head = null;
    }
    this._tail = this._head;
  }

  get length() {
    return this._length;
  }

  /**
   * Insert the value at the tail of the list
   *
   * @param value Value to insert
   */
  add(value) {
    if (typeof value === "undefined") return;
    if (value === null) return;

    const node = { value, next: null };

    if (!this._head) {
      this._head = node;
    }

    if (this._tail) {
      this._tail.next = node;
    }

    this._tail = node;
    this._length++;
  }

  /**
   * Insert the value at the head of the list
   * @param value Value to insert
   */
  addHead(value) {
    if (!value) return;

    const node = { value, next: this._head };
    this._head = node;
    this._length++;
  }

  /**
   * Remove the tail of the list
   * @returns the value
   */
  removeTail() {
    if (!this._tail) return;

    let currentNode = this._head;

    while (currentNode.next !== this._tail) {
      currentNode = currentNode.next;
    }
    this._tail = currentNode;
    let result = currentNode.next.value;
    this._tail.next = null;
    this._length--;

    return result;
  }

  /**
   * Remove the value of the list
   */
  remove(value) {
    if (!value) return;
    if (!this._head) return;

    let currentNode = this._head;
    let nodeToDelete;

    if (currentNode.value === value) {
      this.removeHead();
      return;
    }

    while (currentNode) {
      if (currentNode.next.value === value) {
        nodeToDelete = currentNode.next;
        break;
      }

      currentNode = currentNode.next;
    }

    currentNode.next = nodeToDelete.next;
    this._length--;
  }

  /**
   * Remove the head of the list
   * @returns the value
   */
  removeHead() {
    if (this._head) {
      let result = this._head.value;
      this._head = this._head.next;

      if (!this._head) {
        this._tail = null;
      }
      this._length--;
      return result;
    }
  }

  /**
   * Test if the given node is the head of the list
   *
   * @param value Node to assert
   * @typeparams should be the same type as the list
   * @returns true if the node is the head
   */
  isHead(value) {
    if (typeof value === "object") {
      return value === this._head;
    } else {
      return value === this._head.value;
    }
  }

  /**
   * Test if the node is the tail of the list
   *
   * @param node Node to assert
   * @typeparam should be the same type as the list
   * @returns true if the node is the tail
   */
  isTail(value) {
    if (typeof value === "object") {
      return value === this._tail;
    } else {
      return value === this._tail.value;
    }
  }

  /**
   * Returns the head of the list
   * @returns head's value
   */
  getHead() {
    return this._head.value;
  }

  /**
   * Returns the tail's value of the list
   * @returns tail's value
   */
  getTail() {
    return this._tail.value;
  }

  /**
   * Iterator for all the value of the list
   * @returns an iterator to loop through the list nodes values
   */
  *values() {
    let currentNode = this._head;

    while (currentNode) {
      yield currentNode.value;
      currentNode = currentNode.next;
    }
  }

  /**
   * Iterator for all the node of the list
   * @returns an iterator to loop through the list nodes
   */
  *nodes() {
    let currentNode = this._head;
    while (currentNode) {
      yield currentNode;
      currentNode = currentNode.next;
    }
  }

  /**
   * map implementation for the linked list
   * @param {Function} iteratee the iterate function to execute on each item
   */
  map(iteratee) {
    if (!this._head) return;
    let currentNode = this._head;
    let list = new LinkedList();

    while (currentNode) {
      list.add(iteratee(currentNode.value));
      currentNode = currentNode.next;
    }
    return list;
  }

  /**
   * Search for the value in the list
   * @param value Value to find in the list
   * @returns {Boolean} true if the value is found
   */
  find(value) {
    if (!this._head) return;

    let currentNode = this._head;

    while (currentNode.value !== value) {
      if (currentNode.next === null) {
        return false;
      }
      currentNode = currentNode.next;
    }

    return true;
  }

  /**
   * Reduce function for the list
   *
   * @param callback The reducer provided
   * @param initialValue The initialValue provided for the accumulator
   */
  reduce(callback, initialValue) {
    let iterator = this.nodes();

    let currentNode = iterator.next();
    let acc = initialValue;

    while (!currentNode.done) {
      if (typeof acc === "undefined") return;
      if (!currentNode) return;

      acc = callback(acc, currentNode.value.value, currentNode.value);
      currentNode = iterator.next();
    }
    return acc;
  }

  /**
   * Print all the values of the list
   */
  print() {
    if (this._head) {
      let currentNode = this._head;

      let string = "";
      while (currentNode.next) {
        string += `${currentNode.value} -> `;
        currentNode = currentNode.next;
      }

      string += `${currentNode.value}`;
      console.log(string);
    }
  }
}

export default LinkedList;
