
///////////////////////////////////////////
/////////// Doubly Linked List ///////////
/////////////////////////////////////////

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}


class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    let newNode = new Node(data)

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }


  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value) {
    let newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
      currentHead.prev = this.head;
    }
    this.length++;
    return this
  }


  print() {
    if (this.length === 0) return "List is empty";
    let current = this.head;

    while (current) {
      console.log(current.data)
      current = current.next;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter;
    let currentNode;

    if (index <= this.length / 2) {
      counter = 0;
      currentNode = this.head;

      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  set(index, value) {
    let selectedNode = this.get(index)
    if (selectedNode) {
      selectedNode.data = value;
      return true
    } else {
      return false
    }
  }


  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let insertAt = this.get(index - 1);
    let currentNext = insertAt.next;

    insertAt.next = newNode;
    newNode.prev = insertAt;

    newNode.next = currentNext;
    currentNext.prev = newNode;
    this.length++
    return this
  }

  remove(index) {

    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    let removeNode = this.get(index);
    if (removeNode) {
      let prev = removeNode.prev;
      let next = removeNode.next;
      prev.next = next;
      next.prev = prev;
      removeNode.next = null;
      removeNode.prev = null;
    } else {
      return false
    }
    this.length--;
    return removeNode;
  }








}




// let dblist = new DoublyLinkedList();
// dblist.push(100);
// dblist.push(200);
// dblist.pop();
// dblist;