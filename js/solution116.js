

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

//don't worry about uppercase vowels
//y is not considered a vowel for this kata

//take in a string of words 
// return the words back with all vowels taken out
// “hello” => “hll”, “maintain” => “mntn”, “dog” => “dog”
// split the string and filter out the vowels. Join the string back together


function shortcut(string){
    return string.split('').filter(letter => !'aeiou'.includes(letter)).join('')
}
