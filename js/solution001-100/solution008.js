//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//take an array of numbers
//square root the numbers in array
//add the square rooted numbers 
//return the sum

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum
    }, 0)
  }