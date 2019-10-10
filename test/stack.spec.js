import { expect } from 'chai';
import Stack from '../src/stack';

describe('Stack class', () => {
  it('should return a stack', () => {
    let stack = new Stack();

    expect(stack).to.be.ok;
  });
});
