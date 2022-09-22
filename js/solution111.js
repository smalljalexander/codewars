//You are to write a function that takes a string as its first parameter. This string will be a string of words.
//You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.
//Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word. 

// take in 3 parameters (string, word position, times word is repeated) 
// return a word of the string and repeat it the word with a - between each word
// (this is a string, 2, 3) => a-a-a,  (the dog ran, 0, 2) => the-the,  (the dogs are friends, 1,3) => dogs-dogs-dogs
// take in the string of words, then put the 



function modifyMultiply (str,loc,num) {
  return (str.split(" ")[loc]+"-").repeat(num).slice(0,-1)
} 
