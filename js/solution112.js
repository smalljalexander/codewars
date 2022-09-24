//Task:
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).
//Examples:
//Input: [0]
//Output: "even"
//Input: [0, 1, 4]
//Output: "odd"
//Input: [0, -1, -5]
//Output: "even"


//take in an array of numbers positive or negative
// return the string odd or even from the sum
// [0,5,7] => even [9,3] => even [10,2,6] => odd
// reduce the array and make a conditional that returns if the number is odd or even 



function oddOrEven(array) {
  if(array.reduce((a, b) => a + b, 0) % 2 === 0){
    return 'even'
}else{
    return 'odd'
}
}
