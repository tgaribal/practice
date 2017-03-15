var memo = {};

var fib = function (n) {
  // if (n === 0 || n === 1) {
  //   memo[n] = n;
  //   return n;
  // } 

  // if (memo[n]) {
  //   return memo[n]
  // } else {
  //   result = fib(n-1) + fib(n-2)
  //   memo[n] = result;
  //   return result;
  // }



}

// console.log(fib(12));


var maxDuffleBagValue = function (cakeTypes, capacity) {
  // var maxValuesAtCapacities = [];
  // // for (var i = 0; i < capacity; i++) {
  // //   maxValuesAtCapacities[i] = 0;
  // // }

  // console.log(maxValuesAtCapacities)
}
var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
];

var capacity = 20;

// maxDuffleBagValue(cakeTypes, capacity)


function Queue() {
  this.stack1 = [];
  this.stack2 = [];
}

Queue.prototype.enqueue = function(num) {
  this.stack1.push(num);
}

Queue.prototype.dequeue = function() {
  if (this.stack2.length === 0) {
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop())
    }
  }
  return this.stack2.pop();
}
// ============================ MaxStack ============================================ //

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
  this.maxHistory = new Stack();
  this.stack = new Stack();
  // Stack.call(this)
}

// MaxStack.prototype = Object.create(Stack.prototype);
// MaxStack.prototype.constructor = MaxStack;

MaxStack.prototype.push = function (item) {
  this.stack.push(item);
  if (item >= this.maxHistory.peek() || !this.maxStack.peek()) {
    this.maxHistory.push(item);
  }
}

MaxStack.prototype.pop = function () {
  var lastItem = this.stack.pop();
  if (this.maxHistory.peek() === lastItem) {
    this.maxHistory.pop();
  }
  return lastItem;
}

MaxStack.prototype.getMax = function () {
  return this.maxHistory.peek();
}

// var mStack = new MaxStack();

// mStack.push(1)
// mStack.push(2)
// mStack.push(3)
// mStack.push(4)
// mStack.push(5)
// mStack.pop();


// console.log(mStack.getMax())


var findLoneUniqueInt = function (arr) {
  var results = {};

  for (var i = 0; i < arr.length; i++) {
    if (!results.hasOwnProperty(arr[i])) {
      results[arr[i]] = true;
    } else {
      delete results[arr[i]]
    }
  }
  console.log(results)
  return Number(Object.keys(results));
}

// console.log(findLoneUniqueInt([1, 3, 6, 8, 9, 12, 23, 2, 9, 76, 99, 1, 3, 6, 8, 2, 76, 99, 12]))



var deleteNode = function (node) {
  if (!node.next) {
    delete node;
  } else {
    node.value = node.next.value;
    node.next = node.next.next;
  }
}

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

// var a = new LinkedListNode(3);
// var b = new LinkedListNode(8);
// var c = new LinkedListNode(2);

// a.next = b;
// b.next = c;

// deleteNode(b);
// console.log(a)


var containsCycle = function (node) {
  var a = node;
  var b = node;

  while (a && b.next) {
    a = a.next
    b = b.next.next

    if (a === b) {
      return true;
    }
  }

  return false;
}


var reverseLinkedList = function (listHead) {

  var current = listHead;
  var prev = null;
  var next = null;

  while (current) {
    next = current.next
    current.next = prev;
    prev = current;
    current = next; 
  }
  return prev;
}


var kthToLastNode = function(k, headNode) {
  var current = headNode;
  var kth = null; 
  var counter = k - 1;

  while (current.next) {
    if (counter === 0) {
      kth = headNode;
    }
    current = current.next;
    if (kth) { kth = kth.next };
    counter--; 
  }
  return kth.value;
}

function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

// var a = new LinkedListNode("Angel Food");
// var b = new LinkedListNode("Bundt");
// var c = new LinkedListNode("Cheese");
// var d = new LinkedListNode("Devil's Food");
// var e = new LinkedListNode("Eccles");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

// console.log(kthToLastNode(3, a));


var reverseInPlace = function (str) {
  var chars = str.split('');
  var temp;
  var firstIndex = 0;
  var lastIndex = chars.length - 1;

  while (firstIndex < lastIndex) {
    temp = chars[firstIndex];
    chars[firstIndex] = chars[lastIndex]
    chars[lastIndex] = temp;
    firstIndex++;
    lastIndex--
  }
  return chars.join('')
}

// console.log(reverseInPlace('abcdefghijklmnopq'))


var reverseSentence = function (str) {
  var words = str.split(' ');
  var temp;
  var firstIndex = 0;
  var lastIndex = words.length - 1;

  while (firstIndex < lastIndex) {
    temp = words[firstIndex];
    words[firstIndex] = words[lastIndex]
    words[lastIndex] = temp;
    firstIndex++;
    lastIndex--
  }
  return words.join(' ')
}

// console.log(reverseSentence('find you will pain only go you recordings security the into if'))


var indexOfCloseParen = function (str, index) {
  var tracker = 0;
  for (var i = index + 1; i < str.length; i++) {
    if (str[i] === '(') {
      tracker++;
    } else if (str[i] === ')') {
      if (tracker === 0) {
        return i;
      } else {
        tracker--;
      }
    }
  }
}

// console.log(indexOfCloseParen('Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.', 10))



var allClosedBrackets = function (str) {
  var openers = [];
  var openersToClosers = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }

  var closers = new Set([')', '}', ']'])

  for (var i = 0; i < str.length; i++) {
    if (openersToClosers.hasOwnProperty(str[i])) {
      openers.push(str[i]);
    } else if (closers.has(str[i])) {
      var char = openers.pop();
      if (openersToClosers[char] !== str[i]) {
        return false;
      }
    }
  };

  return true;
};

// console.log(allClosedBrackets('{ [ ] ( ) }'));
// console.log(allClosedBrackets('{ [ ( ) ]  }'));
// console.log(allClosedBrackets('{ [ }'));
// console.log(allClosedBrackets('( {} [] )'));


var permutationPalindrome = function (str) {
  var chars = new Set();

  for (var i = 0; i < str.length; i++) {
    if (chars.has(str[i])) {
      chars.delete(str[i])
    } else {
      chars.add(str[i])
    }
  }
  // console.log(chars)
  return chars.size <= 1;
}

// console.log(permutationPalindrome('civic'));
// console.log(permutationPalindrome('ivicc'));
// console.log(permutationPalindrome('ccvviii'));
// console.log(permutationPalindrome('civil'));
// console.log(permutationPalindrome('radar'));

var stringPermutations = function (str) {
  var chars = str.split('');
  var results = [];

  var buildString = function (chars, word) {
    if (chars.length === 0) {
      results.push(word);
    }
    for (var i = 0; i < chars.length; i++) {
      var current = chars.slice();
      var next = current.splice(i,1);
      // console.log(current, next)

      buildString(current, word+chars[i]);
    }
  }
  buildString(chars, '')
  return results;

}

// console.log(stringPermutations('cats'))

// var arr = [1, 2, 3]
// console.log(arr.slice(1))


var sortScores = function () {
  
}
