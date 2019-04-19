// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

// The provided solution

class Queue {
  constructor() {
    this.first = new Stack;
    this.second = new Stack;
  }

  add(rec) {
    this.first.push(rec);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const result = this.second.pop();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return result;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const result = this.second.peek();

    while(this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return result;
  }
}

module.exports = Queue;

// My more efficient method

// class Queue {
//   constructor() {
//     this.stack1 = new Stack;
//     this.stack2 = new Stack;
//   }

//   add(rec) {
//     while (this.stack1.peek()) {
//       this.stack2.push(this.stack1.pop());
//     }

//     this.stack1.push(rec);

//     while (this.stack2.peek()) {
//       this.stack1.push(this.stack2.pop())
//     }
//   }

//   remove() {
//     return this.stack1.pop();
//   }

//   peek() {
//     return this.stack1.peek();
//   }
// }