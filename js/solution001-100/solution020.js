//Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//For example,

//[true,  true,  true,  false,
//  true,  true,  true,  true ,
// true,  false, true,  false,
//  true,  false, false, true ,
//  true,  true,  true,  true ,
//  false, false, true,  true]
//The correct answer would be 17.

//Hint: Don't forget to check for bad values like null/undefined

//PREP

//parameters- returning an array that counts true and doesnt count false or null/undifide 

//returns- the number of true statements in the array 

//examples- [true,false,null] = 1
            //[true,true,false] = 2
            //[false,true,null] = 1

//psuedocode- take in an array of true/false/null statements
            //loop through the array and just grab the true statement in an array
            //count the number of elements in array 
            //return the count 
            


function countSheeps(arrayOfSheep) {
    let numOfSheep= 0
   for(let i = 0; i < arrayOfSheep.length; i++){
           if(arrayOfSheep[i] == true)
            numOfSheep++
            return numOfSheep
    } 
}



