//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

//If the function is passed a valid PIN string, return true, else return false.

//Examples (Input --> Output)

//"1234"   -->  true
//"12345"  -->  false
//"a234"   -->  false

//Take in a string on numbers and letters
//Returning true if there is a length of 4 or 6 of just numbers other wise return false
//1234 => true
//Abs34 => false
//Di23jk => false

//Take in a string split the string and return the length of the string.  Return true if length is equal to 4 or 6. Return false for anything else 


function validatePIN (pin) {
  //return true or false
  var n = pin.length;
  if( n != 4 && n != 6)
      return false;
  for (var i in pin)
      if (pin[i] > '9' || pin[i] < '0')
          return false;
  return true;
}
