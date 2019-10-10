/**
 * Create a new stack
 */
class Stack {
  constructor() {
    this._storage = {};
    this._length = 0;
  }

  /**
   * Push function: add an element to the stack
   *
   * @param value The value to be added.
   * @typeparam should be the type of the stack
   */
  push(value) {
    if (!value) return;

    this._storage[this._length] = value;
    this._length++;
  }

  /**
   * Remove the element at the top of the stack
   *
   * @returns the element
   */
  pop() {
    let element = this._storage[this._length - 1];
    delete this._storage[this._length - 1];
    this._length--;
    return element;
  }

  /**
   * @returns the top element of the stack
   */
  peek() {
    return this._storage[this._length - 1];
  }

  get length() {
    return this._length;
  }
}

export default Stack;
