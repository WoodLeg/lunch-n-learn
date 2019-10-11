class LinkedList {
  constructor(value) {
    this._length = 0;
    this._head = {};
    this._tail = {};
  }

  get length() {
    return this._length;
  }

  /**
   * Insert the value at the tail of the list
   *
   * @param value Value to insert
   */
  add(value) {}

  /**
   * Insert the value at the head of the list
   * @param value Value to insert
   */
  addHead(value) {}

  /**
   * Remove the tail of the list
   * @returns the value
   */
  removeTail() {}

  /**
   * Remove the value of the list
   */
  remove(value) {}

  /**
   * Remove the head of the list
   * @returns the value
   */
  removeHead() {}

  /**
   * Test if the given node is the head of the list
   *
   * @param value Node value to assert
   * @returns true if the node is the head
   */
  isHead(value) {}

  /**
   * Test if the node is the tail of the list
   *
   * @param value Node value to assert
   * @returns true if the node is the tail
   */
  isTail(value) {}

  /**
   * Returns the head of the list
   * @returns head's value
   */
  getHead() {}

  /**
   * Returns the tail's value of the list
   * @returns tail's value
   */
  getTail() {}
}

export default LinkedList;
