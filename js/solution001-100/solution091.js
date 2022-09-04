//Trolls are attacking your comment section!
//A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//Your task is to write a function that takes a string and return a new string with all vowels removed.
//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//Note: for this kata y isn't considered a vowel.


//take in a string of words 
// return the string with all of the vowels removed
// “hello world” => “hll wrld”, “ my name is => “my nm s”, “ducks quack” => “dcks qck”
// I would take in the string of worlds and split the string into individual letters. I would replace the vowels then join the string together. 


const vowels = 'aeiou'

function disemvowel(str) {
  return str
    .split('')
    .filter(letter => !vowels.includes(letter.toLowerCase()))
    .join('')
}
