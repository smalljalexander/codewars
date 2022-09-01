//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

//Note: input will never be an empty string

//take in a string of numbers 
// return 0 if the number is less than 5 and return 1 if the number is greater than 5
// “73839” => “10101”, “3629” => “0101”, “123299” => “000011”
// I declare a new variable num that will hold the new string then do an if statement to return 1 if number is => 5 and 0 if number is less than 5.  Return num

function fakeBin(x){
  let num = ""
  for(let i = 0; i < x.length; i++){
      if(Number(x[i]) >= 5){
       num += "1"
        }else{
       num += "0"
   }
 }return num
}
