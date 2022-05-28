//Write a function to split a string and convert it into an array of words.

//Examples (Input -> Output):
//* "Robin Singh" ==> ["Robin", "Singh"]

//* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

//take a string of words
//take in string and put it in an array 
//string = the input of string words
//convertIntoArray= change string into an array 


function stringToArray(string){
    return (string.split(' '))
}


stringToArray('robin singh')