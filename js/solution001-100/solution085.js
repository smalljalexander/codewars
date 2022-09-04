//We need a function that can transform a string into a number. What ways of achieving this do you know?
//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//take in a string with a number
//return the number to be not a string
//examples: "1234" => 1234, "54" => 54, "908" => 908
//take the string and use the number method to make it not a string.

const stringToNumber = function(str){
  return Number(str)
}
