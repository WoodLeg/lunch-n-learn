class Queue {
  constructor() {
    this._storage = {};
    this._length = 0;
    this._headIndex = 0;
  }

  /**
   * Add an element to the queue.
   *
   * @param value element to add
   */
  enqueue(value) {
    if (!value) return;
    this._storage[this._length] = value;
    this._length++;
  }

  /**
   * Remove the head of the queue
   * @returns the element positioned at the head
   */
  dequeue() {
    let element = this._storage[this._headIndex];
    delete this._storage[this._headIndex];
    this._headIndex++;
    this._length--;
    if (this._length === 0) {
      this._headIndex = 0;
    }
    return element;
  }

  get length() {
    return this._length;
  }
}

export default Queue;
