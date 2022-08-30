//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//If you want to know more: http://en.wikipedia.org/wiki/DNA
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// take in a string with the letters A, T, C, G
// return the opposite pair of individual letters. There won't be an unmatched letter in the string.
// "ACG" => "TGC" "GAT" => "CTA" "AAAA" => "TTTT"
// I will run a for loop then an else if statement to change the letter to the complement letter. I will return the string.


function DNAStrand(dna){
    let res="";
  for(let i=0; i<dna.length; i++) {
    switch(dna[i]) {
      case 'A':
        res += "T"
        break;
      case 'T':
        res += "A"
        break;
      case 'G':
        res += "C"
        break;
      case 'C':
        res += "G"
        break;
    }
  }
  return res
}
