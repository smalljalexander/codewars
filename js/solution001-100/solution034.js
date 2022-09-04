//The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

//Example output:

//Hello, Mr. Spock

//parameters- string with the word hello then name of person 
//return- return a string with the word hello then , then name of person 
//examples-Hello, Mr. Spock, Hello, Liutenant Uhura, Hello, Dr. McCoy
//psuedocode- return a concatenated string with hello + , + template literal of the parameter


function sayHello(name) {
    return `Hello, ${name}`
  }