//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//Example: (Input --> Output)

//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter case)


//take in a string with one word in it and ignore the letter case
//return true if no letters repeat and return false if letters are repeated
//“dog” => true, “Hannah” => false, “car” => true
// I would split the the string amd make it lowercase. I would run a for loop and have it return true if no letters repeat and return false if they do repeat


function isIsogram(str){
  let i, j
  str = str.toLowerCase()
  for(i = 0; i < str.length; i++)
    for(j = i + 1; j < str.length; j++)
      if(str[i] === str[j])
        return false
  return true
}
