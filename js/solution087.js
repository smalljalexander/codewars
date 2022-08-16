//Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.


//Take in a string with uppercase and lower case letters
//Return the indexes of all capital letters in the string 
//“HeLLo” => 0,2,3. dOg => 1, fiSH => 2,3
//Take in the string and run a loop that counts the indexes of the uppercase letters 

let capitals = function (word) {
  let caps = []
  for( let i = 0; i < word.length; i++) {
    if(word[i].toUpperCase() == word[i]) caps.push(i)
  }
  return caps
}
