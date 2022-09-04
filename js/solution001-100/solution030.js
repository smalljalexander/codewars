//Given an array of integers, return a new array with each value doubled.

//For example:

//[1, 2, 3] --> [2, 4, 6]
//PREP

//Paramenters- array of whole numbers,
//Returns- new array with all values doubled
//examples- [1, 2, 3] --> [2, 4, 6], [2,4,6] => [4,8,12],  [4,8,12] => [8,16,24]
//psuedocode- take the array of integers, declare new new variable with map then * 2 each integers


function maps(x){
   let num = x.map(x => x * 2)
   console.log(num)
}

maps([2,4,6])