/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      //if list is empty set both hhead and tail to new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if (!newNode.next) {
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    // if list is empty
    if (!this.head) return undefined;
    //if not empty
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length = this.length - 1;
    //if one item in linked list
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) return undefined;

    let current = this.head;
    let newHead = this.head.next;
    this.head = newHead;
    this.length = this.length - 1;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    //think this is node method.  will redo when finish node.js
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    return this._get(idx).val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let current = this.head;
    while (current) {
      total += current.val;
      current = current.next;
    }
    return total / this.length;
  }
}

// let count = new LinkedList();
// count.push(10);

// let ten = count.push(10);
// let nine = count.unshift(9);
// let eight = count.unshift(8);
// let seven = count.unshift(7);
// this.head = seven;
// ten = this.tail;
// ten.next = null;
// console.log(count);
// module.exports = LinkedList;
