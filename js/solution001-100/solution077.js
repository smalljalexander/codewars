//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

//Input
//Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.

//Output
//Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

//Example
//input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
//output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


//Take in several arrays of strings containing two numbers  age, handicap
//Return senior if their age is greater than 55 and a handicap greater than seven. Everything else will be in open category 
//([18,24)], [(45, 2)], [(61,12)] => open, open, senior
//Take in the arrays and loop through them with the 1st value being age and second value being handicap.  If age is above 55 and above 7 then return senior. All else will return open. 

function openOrSenior(data){
  let result = []
  data.forEach(function(member) {
    if(member[0] >= 55 && member[1] > 7) {
      result.push('Senior')
    } else {
      result.push('Open')
    }
  })
  return result
}
