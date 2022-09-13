//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.
//Example
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// take an array of positive and negative numbers 
// return 2 numbers the first is sum of positive and 2nd is the sum of negative numbers
// [2,3,5,2,-6,-8,-4] => [12,-18] 
// assign variables for the answer, positive numbers and negative numbers use an else if statement to reduce to get the sum of the numbers of positive and sum of negative numbers in a different variable. 



function countPositivesSumNegatives(input) {
    const answer = []
    let positiveSum = 0
    let negativeSum = 0

    if(input && input.length) {
      for(let i = 0; i < input.length; i++) {
        if(input[i] > 0) {
            positiveSum += 1
        } else {
            negativeSum += input[i]
        }
      }
      answer.push(positiveSum)
      answer.push(negativeSum)
    }
    return answer
}
