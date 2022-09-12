//I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
//P.S. Each array includes only integer numbers. Output is a number too.

//take in 2 arrays
// return both arrays added together into one number
// reduce both arrays individually then add them together and return the value

function arrayPlusArray(arr1, arr2) {
  return arr1.reduce((a , b) => a + b, 0) + arr2.reduce((a , b) => a + b, 0)
}
