const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(value) {
    this.head = value ? new ListNode(value) : null;
    this.tail = this.head;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let neww = new ListNode(value);
    if (this.head === null) {
      this.head = neww;
      this.tail = this.head;
      return;
    }
    this.tail.next = neww;
    this.tail = neww;
  }

  dequeue() {
    let first = this.head;
    this.head = this.head.next;
    return first.value;
  }
}


module.exports = {
  Queue
};
