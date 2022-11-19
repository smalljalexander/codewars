//Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.
//Write a function which takes a list of strings and returns each line prepended by the correct number.
//The numbering starts at 1. The format is n: string. Notice the colon and space in between.



//Take in a list of strings 
//Return the number starting at 1 of the position of the letter.  Return in this format number: a

//["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
//[] --> []
//[“h”, “d”,”f”] => [“1: h”, “2: d”, “3: f”]

//Loop through the string. Take the index and add 1 and concatenate : then take the letter


var number=function(array){
  return array.map (function (line, index) { 
    return (index + 1) + ": "+ line})
  }
  
