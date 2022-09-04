//You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//Write a program that returns the girl's age (0-9) as an integer.
//Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

//take in a string with one number
// return a number from the string 
// '7 years old' => 7, '9 years old' => 9, '1 year old' => 1
// take in a string with one number, use parse integer to return the number.

function getAge(inputString){
  return parseInt(inputString)
}
