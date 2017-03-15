//================================ PROBLEM 1 ================================//

function getMaxProfit(stockPricesYesterday) {
//     // var largestDiff = stockPricesYesterday[1] - stockPricesYesterday[0];
//     // for (var i = 0; i < stockPricesYesterday.length; i++) {
//     //     for (var j = i+1; j < stockPricesYesterday.length; j++) {  
//     //       var diff = (stockPricesYesterday[j] - stockPricesYesterday[i])
//     //         if (diff > largestDiff) {
//     //             largestDiff = diff
//     //         }
//     //     }
//     // }
//     // return largestDiff
//     var lowest = stockPricesYesterday[0];
//     var largestDiff = stockPricesYesterday[1] - stockPricesYesterday[0];

//     for (var i = 1; i < stockPricesYesterday.length; i++) {
//       var diff = stockPricesYesterday[i] - lowest;
//       if (diff > largestDiff) {
//         largestDiff = diff;
//       }
//       if (stockPricesYesterday[i] < lowest) {
//         lowest = stockPricesYesterday[i];
//       }
//     }
//     return largestDiff;
}

// // run your function through some test cases here
// // remember: debugging is half the battle!
// console.log(getMaxProfit([1, 7, 5, 8, 110, 9]));
// console.log(getMaxProfit([1, 7])); //6
// console.log(getMaxProfit([100, 100, 3, 1])); //0
// console.log(getMaxProfit([10, 5, 4, 3, 2, 1])); //-1



//================================ PROBLEM 2 ================================//

var getProductsOfAllIntsExceptAtIndex = function(arr) {
  // //====== quadratic timing =======
	// var results = [];
	// for (var i = 0; i < arr.length; i++) {
	// 	results[i] = 1;
	// 	for (var j = 0; j < arr.length; j++) {
	// 		if (i !== j) results[i]=results[i] * arr[j]
	// 	}
	// }
	// return results;


  // //====== linear timing =======
  // var results = new Array(arr.length);
  // var tempProduct = 1;

  // for (var i = 0; i < arr.length; i++) {
  //   results[i] = tempProduct;
  //   tempProduct *= arr[i];
  // }

  // tempProduct = 1;
  // for (var j = arr.length-1; j >= 0; j--) {
  //   results[j] *= tempProduct;
  //   tempProduct *= arr[j]
  // }
  // return results

  //====== using division (watch for zeros!) =======
  // var hasZero = false;
  // var totalProduct = arr.reduce((total, item) => {
  //   if (item === 0) {
  //     hasZero = true;
  //     return total;
  //   } else {
  //     return total*=item;
  //   }
  // }, 1)

  // return arr.map(item => {
  //   if(hasZero) {
  //     return item !== 0 ? 0 : totalProduct;
  //   } else {
  //     return (totalProduct/item)
  //   }
  // })

} 

// console.log(getProductsOfAllIntsExceptAtIndex([1, 7, 3, 4, 0, 0])) // [84, 12, 28, 21]


var highestProductOfThree = function (arr) {
  // //Brute method, I think this is O(n)  but they use greedy method, below
  // var sorted = arr.sort((a, b) => a-b);
  // if (arr.length < 3) {
  //   return 'Array must have at least 3 integers'
  // }
  // var product = Math.max((sorted[0] * sorted[1] * sorted[sorted.length-1]), (sorted[sorted.length-1] * sorted[sorted.length-2] * sorted[sorted.length-3]));;
  // return product;

  // if (arr.length < 3) {
  //   return 'Array must have at least 3 integers'
  // }

  // var highest = Math.max(arr[0], arr[1]);
  // var lowest = Math.min(arr[0], arr[1])
  // var highestOfTwo = arr[0] * arr[1];
  // var lowestOfTwo = arr[0] * arr[1];
  // var highestOfThree = arr[0] * arr[1] * arr[2];

  // for (var i = 2; i < arr.length; i++) {
  //     var current = arr[i];
  //     highestOfThree = Math.max(
  //       highestOfThree,
  //       current * highestOfTwo,
  //       current * lowestOfTwo
  //     );

  //     highestOfTwo = Math.max(
  //       highestOfTwo,
  //       current * highest,
  //       current * lowest
  //     );

  //     lowestOfTwo = Math.min(
  //       lowestOfTwo,
  //       current * highest,
  //       current * lowest
  //     );

  //     highest = Math.max(current, highest);
  //     lowest = Math.min(current, lowest);
  //   }
  // return highestOfThree;
} 

// console.log(highestProductOfThree([1, 10, -5, 1, -100]));



var mergeRanges = function (meetingTimes) {
  // var sorted = meetingTimes.sort((a, b) => a.startTime-b.startTime);
  // var results = [];
  // var chunk = sorted[0];

  // for (var i = 1; i < sorted.length; i++) {
  //   var current = sorted[i];
  //   if (current.startTime <= chunk.endTime) {
  //     if (current.endTime > chunk.endTime) {
  //       chunk.endTime = current.endTime;
  //     } 
  //   } else {
  //     results.push(chunk);
  //     chunk = current;
  //   }
    
  // }
  // results.push(chunk);
  // return results;
} 

// var meetingTimes = [
//   {startTime: 1, endTime: 10},
//   {startTime: 2, endTime: 6},
//   {startTime: 3, endTime: 5},
//   {startTime: 7, endTime: 9},
// ]
// var meetingTimes = [
//   {startTime: 0,  endTime: 1},
//   {startTime: 3,  endTime: 5},
//   {startTime: 4,  endTime: 8},
//   {startTime: 9,  endTime: 10},
//   {startTime: 10, endTime: 12},
// ];

//console.log(mergeRanges(meetingTimes));



var makeChange = function(amount, denominations) {
//   var count = 0;

//   var getCoins = function(amountRemaining, index) {
//     index = index || 0;

//     if (amountRemaining === 0) {
//       console.log('BOOM')
//       return count++;
//     } else if (amountRemaining < 0 || index===denominations.length) {
//       return;
//     } else {
//       var coin = denominations[index];
//       while (amountRemaining >= 0) {
//         getCoins(amountRemaining, index+1); 
//         amountRemaining -= coin;  
//       }
//     }
//   }

//   getCoins(amount, 0);
//   return count;

  // var waysOfDoingNCents = [];

  // for (var i = 0; i <= amount; i++) {
  //   waysOfDoingNCents[i] = i===0 ? 1 : 0
  // }
  // console.log(waysOfDoingNCents);

  // denominations.forEach(coin => {
  //   for (var i = coin; i <= amount; i++) {

  //     waysOfDoingNCents[i] += waysOfDoingNCents[i - coin]
  //   }
  // });
  // console.log(waysOfDoingNCents)
}
// console.log(makeChange(5, [1, 3, 5]))



var findLoveRectangle = function(rect1, rect2) {

  // var findOverLap = function(point1, length1, point2, length2) {
  //   var highestStart = Math.max(point1, point2);
  //   var lowestEnd = Math.min(point1 + length1, point2 + length2)

  //   console.log(highestStart, lowestEnd)
  //   if (highestStart > lowestEnd) {
  //     return null;
  //   } else {
  //     return { start: highestStart, length: lowestEnd - highestStart}
  //   }
  // };

  // var x = findOverLap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
  // var y = findOverLap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);

  // if (!x || !y) {
  //   return null;
  // } else {
  //   return {
  //     leftX: x.start,
  //     bottomY: y.start,
  //     width: x.length,
  //     height: y.length
  //   }
  // }
}

// var rect1 = {
//   leftX: 1,
//   bottomY: 2,
//   width: 3,
//   height: 1
// }

// var rect2 = {
//   leftX: 2,
//   bottomY: 1,
//   width: 1,
//   height: 3
// }

// console.log(findLoveRectangle(rect1, rect2))

var TempTracker = function() {
  this.tracker = {};
  this.total = 0;
  this.number = 0;

  this.highestOccurance = 0;

  this.max = null;
  this.min = null;

  this.mean = null;
  this.mode = null;
}

TempTracker.prototype.insert = function(num) {
  this.number++;
  this.total += num;
  this.mean = this.total / this.number;

  if (this.max === null || num > this.max) this.max = num;
  if (this.min === null || num < this.min) this.min = num;

  if (num in this.tracker) {
    this.tracker[num]++
    if (this.tracker[num] > this.highestOccurance) {
      this.mode = num;
      this.highestOccurance = this.tracker[num];
    } 
  } else {
    this.tracker[num] = 1;
  };

}

TempTracker.prototype.getMax = function () {
  return this.max;
}

TempTracker.prototype.getMin = function () {
  return this.min;
}

TempTracker.prototype.getMean = function () {
  return this.mean;
}

TempTracker.prototype.getMode = function () {
  return this.mode;
}

// var tempTracker = new TempTracker();

// tempTracker.insert(1);
// tempTracker.insert(2);
// tempTracker.insert(5);
// tempTracker.insert(6);
// tempTracker.insert(12);
// tempTracker.insert(0);
// tempTracker.insert(3);
// tempTracker.insert(3);
// tempTracker.insert(8);
// tempTracker.insert(8);
// tempTracker.insert(8);

// console.log(tempTracker.getMax());
// console.log(tempTracker.getMin());
// console.log(tempTracker.getMean());
// console.log(tempTracker.getMode());

// function BinaryTreeNode(value) {
//     this.value = value;
//     this.left  = null;
//     this.right = null;
// }

// BinaryTreeNode.prototype.insertLeft = function(value) {
//     this.left = new BinaryTreeNode(value);
//     return this.left;
// };

// BinaryTreeNode.prototype.insertRight = function(value) {
//     this.right = new BinaryTreeNode(value);
//     return this.right;
// };

var isValidBST = function (node) {
  // var isValid = true;

  // if(node.left < node.value) {
  //   isValidBST (node.left)
  // } else {
  //   isValid = false;
  // }

  // if (node.right > node.value) {
  //   isValidBST (node.right)
  // } else {
  //   isValid = false;
  // }

  // return isValid;
};
 


// var tree = new BinaryTreeNode(12);

// tree.insertLeft()

var findPivot = function (arr) {
  // var firstIndex = 0;
  // var lastIndex = arr.length - 1;
  // while (firstIndex < lastIndex) {

  //   var midIndex = Math.floor( ((firstIndex + lastIndex) / 2) );
  //   // console.log(firstIndex, midIndex, lastIndex)
  //   if (arr[midIndex] < arr[firstIndex]) {
  //     lastIndex = midIndex;
  //   } else {
  //     firstIndex = midIndex;
  //   }
  //   if (firstIndex + 1 === lastIndex) break;
  // }
  // return lastIndex;
}

// console.log(findPivot([8, 9, 10, 1, 2, 3, 4, 5, 6]))
// console.log(findPivot([8, 9, 10, 1]))
// console.log(findPivot([10, 1, 2, 3, 4]))
// console.log(findPivot([4, 5, 6, 7, 1]))
// console.log(findPivot([8, 5, 6, 7]))

var websiteCacheTrie = function () {
  this.rootNode = {};
}

websiteCacheTrie.prototype.checkPresentAndAdd = function (siteUrl) {
  // var currentNode = this.rootNode;

  // for (var i = 0; i < siteUrl.length; i++) {
  //   var char = siteUrl[i]
  //   if (!currentNode.hasOwnProperty(char)) {
  //     currentNode[char] = {};
  //   }
  //   churrentNode = currentNode[char];
  // }

  // if (!currentNode.hasOwnProperty('END OF WORD')) {
  //   currentNode['END OF WORD'] = {};
  // }
}


var inflightEntertainment = function (flightLength, movieLengths) {
  // var keys = {};


  // for (var i = 0; i < movieLengths.length; i++) {
  //   keys[movieLengths[i]] = true;
  //   var timeRemaining = flightLength - movieLengths[i];

  //   if (keys.hasOwnProperty(timeRemaining)) {
  //     return true;
  //   }
  // } 
  // return false;
}

// console.log(inflightEntertainment(10, [2, 3, 4, 5, 6, 7]));
// console.log(inflightEntertainment(5, [2, 3]));
// console.log(inflightEntertainment(10, [11, 12, 13, 8, 10]));
// console.log(inflightEntertainment(1, [2, 3, 4, 5, 6, 7]));

