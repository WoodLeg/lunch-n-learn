import { expect } from "chai";
import LinkedList from "../src/linked-list";

describe("Linked list class:", () => {
  describe("Initialization:", () => {
    it("should return a linked list", () => {
      let linkedList = new LinkedList();

      expect(linkedList).to.be.ok;
    });

    it("should initialize with the value", () => {
      let linkedList = new LinkedList({ name: "foo" });

      expect(linkedList._head).to.be.deep.equal({
        value: { name: "foo" },
        next: null
      });
      expect(linkedList.length).to.be.equal(1);
    });
  });

  describe("Add:", () => {
    it("adds an element to the tail", () => {
      let linkedList = new LinkedList();
      linkedList.add({ name: "foo" });
      expect(linkedList.length).to.be.equal(1);
      expect(linkedList._tail).to.be.deep.equal({
        value: { name: "foo" },
        next: null
      });
    });

    it("does not add  to the tail if no argument provided", () => {
      let linkedList = new LinkedList(1);
      linkedList.add();

      expect(linkedList.length).to.be.equal(1);
    });

    it("adds an element to the head", () => {
      let linkedList = new LinkedList({ name: "foo" });
      linkedList.addHead({ name: "bar" });
      expect(linkedList._head).to.be.deep.equal({
        value: { name: "bar" },
        next: { value: { name: "foo" }, next: null }
      });
    });

    it("does not add to the head if no argyment provided", () => {
      let linkedList = new LinkedList(1);
      linkedList.addHead();
      expect(linkedList.length).to.be.equal(1);
    });
  });

  describe("Remove:", () => {
    it("removes and returns the tail of the list", () => {
      let linkedList = new LinkedList(1);
      linkedList.add(2);

      let result = linkedList.removeTail();

      expect(linkedList.length).to.be.equal(1);
      expect(linkedList._tail).to.be.deep.equal({ value: 1, next: null });
      expect(result).to.be.equal(2);
    });

    it("removes and returns the head of the list", () => {
      let linkedList = new LinkedList(1);
      linkedList.add(2);

      let result = linkedList.removeHead();

      expect(linkedList.length).to.be.equal(1);
      expect(linkedList._head).to.be.deep.equal({ value: 2, next: null });
      expect(result).to.be.equal(1);
    });

    it("removes the value of the list", () => {
      let linkedList = new LinkedList(1);
      linkedList.add(2);
      linkedList.add(3);

      linkedList.remove(2);

      expect(linkedList.length).to.be.equal(2);
      expect(linkedList._head).to.be.deep.equal({
        value: 1,
        next: { value: 3, next: null }
      });
      expect(linkedList._tail).to.be.deep.equal({ value: 3, next: null });
    });

    it("does nothing if the value argument provided", () => {
      let linkedList = new LinkedList(1);
      linkedList.add(2);
      linkedList.add(3);

      linkedList.remove();
      expect(linkedList.length).to.be.equal(3);
    });
  });

  describe("Returns head/tail", () => {
    it("returns the head of the list", () => {
      let ll = new LinkedList(1);
      ll.add(2);
      let result = ll.getHead();
      expect(result).to.be.equal(1);
    });

    it("returns the tail of the list", () => {
      let ll = new LinkedList(1);
      ll.add(2);
      let result = ll.getTail();
      expect(result).to.be.equal(2);
    });
  });
});
