//This time no story, no theory. The examples below show you how to write function accum:
//Examples:
//accum("abcd") -> "A-Bb-Ccc-Dddd"
//accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt") -> "C-Ww-Aaa-Tttt"
//The parameter of accum is a string which includes only letters from a..z and A..Z.


//take in a string of upper and lower case letters
// return each letter and repeat the letter the same amount of times as their position with a - in between each different letter. The first letter will always be uppercase and the rest lower case
// winds => W-I-Nnn-Dddd-Sssss. Dus => D-Uu-Sss. jdoUdh => J-add-Ooo-Uiiu-Ddddd-Hhhhhh


function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}
