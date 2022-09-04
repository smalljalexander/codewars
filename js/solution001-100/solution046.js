//P- taking in a number that can be a whole, decimal, positive or negative.

//R- returning a Boolean. True if even or has a first decimal point as 0.  false if odd or the first decimal is non zero

//E- 2 => true, 5.0 => true,  2.43 => false

//P- take in the number, make an else if statement if n is even return true else function testEven(n) {
   
function testEven(n) {
    if (n % 2 == 0){
      return true
    }else{
      return false
    }
  }
