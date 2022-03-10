/*Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).*/

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

/*Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height. */

let board = "";
let size = 15;
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) board += " ";
      else board += "#";
    } else {
      if (j % 2 === 0) board += "#";
      else board += " ";
    }
  }
  board += "\n";
}
console.log(board);

//Even / odd number check using the recursive function

function isEven(num) {
  if (num === 0) return "Number is even";
  else if (num === 1) return "Number is odd";
  else {
    if (num < 0) return isEven(num + 2);
    else return isEven(num - 2);
  }
}
console.log(isEven(-9));

/*Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].*/

function range(start, end, step = 1) {
  let newArray = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      newArray.push(i);
    }
    return newArray;
  } else {
    for (let i = start; i >= end; i += step) {
      newArray.push(i);
    }
    return newArray;
  }
}

function sum(arr) {
  return arr.reduce((acc, e) => acc + e);
}

console.log(range(1, 10));
console.log(sum(range(1, 10)));

/* Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method. */

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}
function reverseArrayInPlace(arr) {
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    let tempValue = arr[i];
    arr[i] = arr[j];
    arr[j] = tempValue;
  }
  return arr;
}
let arr1 = [1, 2, 3, 4, 5, 6];
reverseArrayInPlace(arr1);
console.log(arr1);

/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. Also write a listToArray function that produces an array from a list. Then add a helper function prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element) or undefined when there is no such element.

If you haven’t already, also write a recursive version of nth.  */

let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

function arrayToList1(arr) {
  list = {};
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: i === arr.length - 1 ? null : { ...list } };
  }
  return list;
}
console.log(arrayToList1([1, 2, 3]));

function listToArray1(list) {
  let newArr = [];
  // for loop to run over a list !!
  for (let node = list; node; node = node.rest) {
    newArr.push(node.value);
  }
  return newArr;
}
console.log(listToArray1(list));

function prepend(el, list) {
  let newList = {
    value: el,
    rest: { ...list },
  };
  return newList;
}
console.log(prepend(151, list));

function nthElement(list, num) {
  return listToArray1(list)[num];
}

console.log(nthElement(list, 2));

/* Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.

let arrays = [[1, 2, 3], [4, 5], [6]];

 → [1, 2, 3, 4, 5, 6] */

let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce((a, b) => a.concat(b)));

/* Implement every as a function that takes an array and a predicate function as parameters. Write two versions, one using a loop and one using the some method. */

function every(array, func) {
  for (element of array) {
    if (!func(element)) return false;
  }
  return true;
}
function every(array, func) {
  if (array.some((e) => !func(e))) return false;
  return true;
}

console.log(every([1, 3, 5], (n) => n < 10));
console.log(every([2, 4, 16], (n) => n < 10));
console.log(every([], (n) => n < 10));

/*Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Input: grid = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];
Output: 1;

Input: grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];
Output: 3;
*/

const numIslands = (grid) => {
  let counter = 0;

  const dfs = (i, j) => {
    if (
      i >= 0 &&
      j >= 0 &&
      i < grid.length &&
      j < grid[i].length &&
      grid[i][j] === "1"
    ) {
      grid[i][j] = "0";
      dfs(i + 1, j); // top
      dfs(i, j + 1); // right
      dfs(i - 1, j); // bottom
      dfs(i, j - 1); // left
    }
  };

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        counter += 1;
        dfs(i, j);
      }
    }
  }

  return counter;
};

/*Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].*/

const merge = (intervals) => {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let previous = intervals[0];

  for (let i = 1; i < intervals.length; i += 1) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }

  result.push(previous);

  return result;
};

// Given an array of integers and a number x, find the smallest subarray with sum greater than the given value.

function smallestSubWithSum(arr, n, x) {
  // Initialize length of smallest subarray as n+1
  let min_len = n + 1;

  // Pick every element as starting point
  for (let start = 0; start < n; start++) {
    // Initialize sum starting with current start
    let curr_sum = arr[start];

    // If first element itself is greater
    if (curr_sum > x) return 1;

    // Try different ending points for curremt start
    for (let end = start + 1; end < n; end++) {
      // add last element to current sum
      curr_sum += arr[end];

      // If sum becomes more than x and length of
      // this subarray is smaller than current smallest
      // length, update the smallest length (or result)
      if (curr_sum > x && end - start + 1 < min_len) min_len = end - start + 1;
    }
  }
  return min_len;
}
