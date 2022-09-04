//Parameters- only argument is a name 

//Returns- returning a string with argument name and depending on the first letter whether lowercase of uppercase of name we do something

//Examples Robert => Robert plays the banjo
//Alex => Alex doesn’t play the banjo
//rod => rod plays the banjo

//Pseudo- take in a name and want to do a else if statement based on the first letter of the name is a r
//Return the  name with the string 


function areYouPlayingBanjo(name) {
  
  if (name.substring(0,1).toLowerCase() === "r" ) {
  return  name + " plays banjo"
}
else{
return name + " does not play banjo"
}

}
