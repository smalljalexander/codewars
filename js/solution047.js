//You might know some pretty large perfect squares. But what about the NEXT one?
//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//P- I’m going to take in a number 
//R- if the square root of the next number is the same number return that number. Otherwise return -1
//E- 121=>144 , 625=>676, 114=> -1
//P- take in the number, divide it down to the square of the number. I would add 1 to the square then square root it. If it’s an integer return the number of not return -1.  function findNextSquare(sq) {
  

function findNextSquare(sq) {
let root = Math.sqrt(sq)
  if (Number.isInteger(root)) {
    return Math.pow(root + 1, 2)
  } else {
    return -1
  }
}
