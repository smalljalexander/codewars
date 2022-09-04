//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
//I love you
//a little
//a lot
//passionately
//madly
//not at all
//When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
//Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.


// take a number 
//make an array with string of words
//loop through array with intake of number 
//return array work with number

//nbPetals = number 
//removingPetals= array of words 




function howMuchILoveYou(nbPetals) {
    let removingPetals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
    return removingPetals[(nbPetals-1) % 6 ]
  }
