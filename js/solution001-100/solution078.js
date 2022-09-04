//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
//Examples input/output:
//XO("ooxx") => true
//XO("xooxx") => false
//XO("ooxXm") => true
//XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//XO("zzoo") => false

//Take in a string of letters lower and uppercase
//Return true if there is the same number of x and o or if there is no x or o. Else return false
//XADo => true
//Rkhj=> true
//Xonekx=> false
//Take in the string and loop through the letters. Then count the x as a positive number and o as a minus. If the sum is equal to 0 return true otherwise return false

function XO(str) {
  let sum = 0
  for(let i=0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') sum++
    if(str[i].toLowerCase() == 'o') sum--
  }
  return sum == 0
}
