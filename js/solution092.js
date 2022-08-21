//There is a bus moving in the city, and it takes and drop some people in each bus stop.
//You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
//Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D
//Take a look on the test cases.
//Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.
//The second value in the first integer array is 0, since the bus is empty in the first bus stop.


// I will take in multiple arrays with 2 numbers in the array. The first number is people getting on the stop and the second number in the array is people getting off of the bus 

// I  will return the number of people on the bus after the last bus stop

// [[(10,0)] , ([4,2] => 12. [[(0,0)} [(0,0)] => 0.  

// I will use the indexes of 0 to subtract the 1st index in a for loop and and return the total 

var number = function(busStops){
  Let totalPeople = 0
  for (var i=0; i<busStops.length; i++) {
    totalPeople += busStops[i][0]
    totalPeople -= busStops[i][1]
  }
  return totalPeople
}
