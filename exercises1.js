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
