// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while(node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let node = this.head.next;
    let prev = this.head;
    while(node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(n) {
    let node = this.head;
    let count = 0;
    while(node) {
      if (count === n) {
        return node;
      }
      count++;
      node = node.next;
    }
    return null;
  }

  removeAt(n) {
    if (!this.head) {
      return;
    }
    if (n == 0) {
      this.head = this.head.next;
      return;
    }
    const prev = this.getAt(n - 1);
    if (!prev.next || !prev) {
      return;
    }
    prev.next = prev.next.next;
  }

  insertAt(data, n) {
    if (n == 0) {
      this.insertFirst(data);
      return;
    }
    let prev = this.getAt(n - 1) || this.getLast();
    prev.next = new Node(data, prev.next);
  }

  forEach(fn) {
    let node = this.head;
    while (node) {
      fn(node);
      node = node.next;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
