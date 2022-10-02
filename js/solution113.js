//Is the string uppercase?
//Task
//Create a method to see whether the string is ALL CAPS.
//Examples (input -> output)

//"c" -> False
//"C" -> True
//"hello I AM DONALD" -> False
//"HELLO I AM DONALD" -> True
//"ACSKLDFJSgSKLDFJSKLDFJ" -> False
//"ACSKLDFJSGSKLDFJSKLDFJ" -> True
//In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.


// take in a string of lower and upper case letters
// return true if all letters are uppercase and false if not.
// “DOG” => true, “FeRReT” => false,  “coder” => false
//  use the this keyword to pass the value and compared the string to an uppercase version of the string. Return true if it’s fulfilled and false if not.



String.prototype.isUpperCase = function() {
  return this.toUpperCase() === this.toString();
}
