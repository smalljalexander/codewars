//Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//[10, 343445353, 3453445, 3453545353453] should return 3453455.

// take in an array of positive whole numbers
// return the sum of the lowest 2 numbers 
// [1,5,2,10] => 3, [3,4,7,5] => 7, [5,7,9,56] => 12
// sort the array from least to greatest and store in variable the Add the 0 and 1 index of the array


function sumTwoSmallestNumbers(numbers) {  
 let sorted = numbers.sort((a, b) => a-b)
 return sorted[0] + sorted[1]
}
