//Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//The output should be two capital letters with a dot separating them.
//It should look like this:
//Sam Harris => S.H
//patrick feeney => P.F

//paremeters-string of two words with one space between them 

//returns- return first letters of each word with a . between them

//examples- sam harris => S.H
            //patrick feeney => P.F
            //Johnny Depp = > J.D

//psuedo code- take in a string of two words
                // get the first letter of the two words
                //put a . between the letters  


function abbrevName(name){
    let intials = name[0] + "."
    for (let i = 0; i < name.length; i++){
        if (name[i] == ' '){
            intials += name[i+1]
        }
    }
return intials.toLocaleUpperCase()
}