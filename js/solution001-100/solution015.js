//You get an array of numbers, return the sum of all of the positives ones.

//Example [1,-4,7,12] => 1 + 7 + 12 = 20

//Note: if there is nothing to sum, the sum is default to 0.

//loop through and grab only the positive integers
//take positive integers and add them together
//return the sum

function positiveSum(arr) {
    let total = 0    
    for (i = 0; i < arr.length; i++) {    
      if (arr[i] > 0) {                  
        total += arr[i]                
      }
    }
    return total                       
  }
  