//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// take in a string of numbers
// return the highest number first with a space then the lowest number 
//“1,4,6,8” =>  “8 1” “-3,9,4,7” => “7 -3”
// I will sort the string of numbers from least to greatest. I will return the 0 index with the last index.

function highAndLow(numbers){
  let arr = numbers.split(' ').sort(function(a, b) { return a - b })
  return arr[arr.length -1] + ' ' + arr[0]
}
