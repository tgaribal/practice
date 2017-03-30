function Queue () {
	this.incoming = [];
  this.outgoing = [];
}

Queue.prototype.enqueue = function (value) {
  this.incoming.push(value);
}

Queue.prototype.dequeue = function () {
  if (!this.outgoing.length) {
    while (this.incoming.length) {
      this.outgoing.push(this.incoming.pop());
    }
  }

  return this.outgoing.pop();
}

const queue = new Queue();

// queue.enqueue(1)
// queue.enqueue(2)
// queue.enqueue(3)
// queue.enqueue(4)
// queue.enqueue(5)
// queue.enqueue(6)
// queue.enqueue(7)
// console.log(queue.dequeue());
// console.log(queue.dequeue());
// queue.enqueue(8);

// console.log(queue)


function Stack() {
    // initialize an empty array
    this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
    this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {
    // if the stack is empty, return null
    // (it would also be reasonable to throw an exception)
    if (!this.items.length) {
        return null;
    }
    return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
    if (!this.items.length) {
        return null;
    }
    return this.items[this.items.length -1];
};

function MaxStack () {
  this.stack = new Stack();
  this.max = new Stack();
}

MaxStack.prototype.push = function(val) {
  if (!this.max.peek() || val >= this.max.peek()) {
    this.max.push(val);
  } 
  this.stack.push(val);
}

MaxStack.prototype.pop = function () {
  let popped = this.stack.pop();
  if (this.max.peek() === popped) {
    this.max.pop();
  }
  return popped;
}

MaxStack.prototype.getMax = function () {
  return this.max.peek();
}






function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

const deleteNode = (node) => {
  const nodeToDelete = node;

  nodeToDelete.value = node.next.value;
  nodeToDelete.next = node.next.next
}

// var a = new LinkedListNode('A');
// var b = new LinkedListNode('B');
// var c = new LinkedListNode('C');

// a.next = b;
// b.next = c;

// deleteNode(b);

// console.log(a)




function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const findCycle = (list) => {
  let slow = list;
  let fast = list;

  while (slow && fast) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    } 
  }
  return false;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
reverseLinkedList = (list) => {
  let current = list;
  let next = null;
  let prev = null;

  while (current) {
    console.log(current)
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
  }

  return prev;
}

// console.log('answer', reverseLinkedList(a))


function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}


kthToLastNode = (k, listHead) => {
  let count = 1;
  let currentNode = listHead;
  let kthNode = null;

  while (currentNode.next) {
    if (count === k) {
      kthNode = listHead;
    } 
    if (kthNode) kthNode = kthNode.next;
    currentNode = currentNode.next;
    count++;
  }
  return kthNode;
}


// console.log(a)
// console.log(kthToLastNode(5, a));



reverseString = (string) => {
  const chars = string.split('');
  let first = 0
  let last = string.length - 1;

  while (first < last) {
    console.log(string)
    let temp = chars[first];
    console.log(temp)
    chars[first] = chars[last];
    chars[last] = temp
    first++;
    last--;
  }
  return chars.join('');
  
}
// console.log(reverseString('string'))

const visited = {};
checkAndAdd = (url) => {
  let newWord = false;
  const chars = url.split('');
  chars.push('*');
  let currentLevel = visited;

  chars.forEach((char, i) => {
    if (currentLevel.hasOwnProperty(letter)) {
      currentLevel = currentLevel[letter]
    } else {
      newWord = true;
      currentLevel[letter] = {};
    }
  })
  return newWord;
}


