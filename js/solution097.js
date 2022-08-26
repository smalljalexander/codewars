//Return the number (count) of vowels in the given string.
//We will consider a, e, i, o, u as vowels for this Kata (but not y).
//The input string will only consist of lower case letters and/or spaces.


/take in a string of lowercase letters and spaces 
//return the number of vowels in the string 
// “have a great day” => 6, “dogs like food” => 5
//take in the string and assign variables for vowel count and vowels. Run a for of loop to grab the vowel characters and count the number of vowels. Return vowel count.



function getCount(str) {
  let vowelCount = 0
  const vowels = ["a", "e", "i", "o", "u"]
  for(let char of str){
      if(vowels.includes(char)){
          vowelCount++
      }
    } return vowelCount
}
