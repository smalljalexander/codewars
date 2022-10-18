//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//The returned value must be a string, and have "***" between each of its letters.
//You should not remove or add elements from/to the array.

//take in an array of words
// return the first index word with *** between each letter
//sort the array then take the first index,split then join with adding ***.

function twoSort(s) {
    let ordered = s.sort()
  return ordered[0].split('').join('***')
}
