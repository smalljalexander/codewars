//It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//take in a string of letters
//return the string with the first and last letter removed
//“the” => “h”, “comment” => “ommen”,  “foster” => “oste”
//take in the string and slice the 0 index and the last index


function removeChar(str){
  return str.slice(1, - 1)
}
