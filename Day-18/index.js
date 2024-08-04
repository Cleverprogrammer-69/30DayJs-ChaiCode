class Array {
  #arr;
  constructor(arr) {
    this.#arr = arr;
  }
  // Task 1 bubble sort
  bubbleSort() {
    for (let i = this.#arr.length - 1; i >= 0; i--) {
      for (let j = 0; j <= i - 1; j++) {
        if (this.#arr[j] > this.#arr[j + 1]) {
          [this.#arr[j + 1], this.#arr[j]] = [this.#arr[j], this.#arr[j + 1]];
        }
      }
    }
  }
  // Task 2 selection sort
    selectionSort() {
        for (let i = 0; i < this.#arr.length - 1; i++) {
            let min = i;
            for (let j = i; j < this.#arr.length; j++) {
                if (this.#arr[j] < this.#arr[min]) {
                    [this.#arr[j], this.#arr[min]] = [this.#arr[min], this.#arr[j]];
                }
            }
        }
    }
  // Task 3 quickSort
    quickSort(arr = this.#arr){
        if (arr.length <= 1) {
            return arr;
        }

        let pivot = arr[0];
        let leftArr = [];
        let rightArr = [];

        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }
        return [...this.quickSort(leftArr), pivot, ...this.quickSort(rightArr)];
    };
    // Task 4
    linearSearch(num){
        let index = -1
        for (let i = 0; i < this.#arr.length; i++) {
            if(this.#arr[i] == num){
                 index = i
                 break
            } 
            
        }
        return index
    }
    // Task 5
    binarySearch(num){
        let sortedArr = this.quickSort(this.#arr)
        let low = 0
        let high = sortedArr.length - 1
        while(low <= high){
          let mid = Math.floor((low + high) / 2)
          if(sortedArr[mid] === num){
            return mid
          }
          if(sortedArr[mid] < num){
            low = mid + 1
          } else {
            high = mid - 1
          }
        }
        return -1
    }
  traverse() {
    console.log(this.#arr.join(" "));
  }
}
const numbers1 = new Array([2, 99, 43, 12, -32, 6])
const numbers2 = new Array([3, 2, -34, 9, 90])
const numbers3 = new Array([34, -3, 0, 21, 100])
numbers1.selectionSort()
numbers1.traverse()
numbers2.bubbleSort()
numbers2.traverse()
console.log(numbers3.quickSort())
console.log(numbers3.linearSearch(-3))
const numbers4 = new Array([-2, 2, 5, 23, 43, 58]);
console.log(numbers4.binarySearch(43))

// Task 6
const country = "Russia"
function countOccurences (iterable){
  let occurences = {}
  for (const elem of iterable) {
    if(occurences[elem]){
      occurences[elem]++
    } else {
      occurences[elem] = 1
    }
  }
  return occurences
}
console.log(countOccurences(country))

// Task 7
function getLongestUniqueSubStrings(str) {
    let longestUniqueSubStrings = [];
    let maxLength = 0;

    for (let i = 0; i < str.length; i++) {
        let currentSubString = '';
        let seenChars = {};

        for (let j = i; j < str.length; j++) {
            if (!seenChars[str[j]]) {
                currentSubString += str[j];
                seenChars[str[j]] = true;
                if (currentSubString.length > maxLength) {
                    longestUniqueSubStrings = [currentSubString];
                    maxLength = currentSubString.length;
                } else if (currentSubString.length === maxLength) {
                    longestUniqueSubStrings.push(currentSubString);
                }
            } else {
                break;
            }
        }
    }

    return longestUniqueSubStrings;
}

console.log(
  "Longest Unique Substrings:",
  getLongestUniqueSubStrings(country)
);
// Task 8
function rotateArray(arr, k){
  let tempArr = arr.slice(0, k)
  for (let i = k; i < arr.length; i++) {
    arr[i - k] = arr[i]
  }
  for (let i = arr.length - k; i < arr.length; i++) {
    arr[i] = tempArr[i-(arr.length - k)]
  }
  return arr
}
console.log(rotateArray([1, 2, 3, 45, -12, 5,89], 4))
// Task 9
function mergeSortedArrays(arr1, arr2) {
  let i = 0,
    j = 0;
  const mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    mergedArray.push(arr1[i] < arr2[j] ? arr1[i++] : arr2[j++]);
  }

  return mergedArray.concat(arr1.slice(i)).concat(arr2.slice(j));
}
console.log(mergeSortedArrays([1, 3, 5], [2, 3, 4, 6]));