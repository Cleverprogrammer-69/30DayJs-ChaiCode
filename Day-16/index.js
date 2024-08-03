// Task 1
function factorial (n){
    if(n === 0 || n === 1){
        return 1
    }
    return n * factorial(n - 1)
}
console.log(factorial(4))

// Task 2
function fibonacci(n){
    if(n === 0) return 0
    if(n === 1) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i))
}

// Task 3
function findSum (arr){
    if(arr.length === 0){
        return 0
    }
    return arr[0] + findSum(arr.slice(1))
}
console.log(findSum([1,2,3,4,5]))

// Task 4
function maxOfArray(arr){
    if(arr.length === 1){
        return arr[0]
    }
    let max = maxOfArray(arr.slice(1))
    return max < arr[0] ? arr[0] : max
}
console.log(maxOfArray([3,52,2,0]))

// Task 5
function reverseString(str){
    if(str.length === 0){
        return ""
    }
    return reverseString(str.slice(1)).concat(str[0])

}
console.log(reverseString("abc"))

// Task 6
function isPalindrome(str, start = 0, end = str.length - 1) {
    if (start >= end) {
        return true;
    }
    if (str[start] !== str[end]) {
        return false;
    }
    return isPalindrome(str, start + 1, end - 1);
}

console.log(isPalindrome("abcba"));

// Task 7
function binarySearch(arr, num, start = 0, end = arr.length - 1) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor((start + end) / 2);

    if( arr[mid] === num) return mid

    if (num < arr[mid]) return binarySearch(arr, num, start, mid - 1);
    
    return binarySearch(arr, num, mid + 1, end);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num = 7;
let foundIndex = binarySearch(arr, num);

console.log(foundIndex);

// Task 8
function countOccurrences(arr, num, index = 0) {
    if (index >= arr.length) {
        return 0;
    }

    let count = arr[index] === num ? 1 : 0;
    return count + countOccurrences(arr, num, index + 1);
}

let array = [1, 2, 3, 4, 3, 3, 5, 3, 6];
let number = 3;
let occurrences = countOccurrences(array, number);

console.log(occurrences);