//Simple, remove the spaces from the string, then return the resultant string.

//  PREP    
//P- x = string of words with spaces
//R - return a string\
//E - ('hello world') => helloworld
    //(dog cat ferret) => dogcatferret
    //(8 5 6 fish 9 ) => 856fish9

//P-take in a string with spaces
    //remove the spaces
    //return the string with no spaces



    function noSpace(x){
        return x.split(' ').join('')
    }



