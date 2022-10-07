
//Write a function that returns a string in which firstname is swapped with last name.


//take in a string of 2 words 
// return the 2 word string by flipping position of the words around
// “john doe” => “doe john”,  “jane smith” => “smith jane”, “dog fish” => “fish dog”
// split the string then use reverse then join the string together with a space in the middle

function nameSuffle(str){
  return str.split(' ').reverse().join(' ')
}
