//Can you find the needle in the haystack?
//Write a function findNeedle() that takes an array full of junk but containing one "needle"
//After your function finds the needle it should return a message (as a string) that says:
//"found the needle at position " plus the index it found the needle, so:
//Example(Input --> Output)
//["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
//Note: In COBOL, it should return "found the needle at position 6"

//PREP
//Paramenters- taking in an array with one needle in array.
//Return- array as a string that tells the index of the array with message found the needle at position (i)
//Examples- ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5", [junk,needle,hay] => found the needle at position 1, [needle,junk,hay] => found the needle at position 0
//Psuedocode- take in the array, use a loop to find the word needle and grab the index of array, return a string "found the needle at position " + i


function findNeedle(haystack) {
    for(let i = 0 ; i < haystack.length; i++){
        if(haystack[i] === "needle"){
            return 'found the needle at position ' + i
        }
    }
  }

