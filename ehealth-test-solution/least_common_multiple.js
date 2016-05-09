/* LEAST COMMON MULTIPLE 
The least common multiple of a set of integers is the smallest positive integer that is a 
multiple of all of the integers in the set. 
Write a function that takes an array of integers and efficiently calculates and returns the 
LCM. */


//Answer


function LCM(array){   
    var length = array.length;
    var absolute = Math.abs(array[0]);

    for (var i = 1; i < length; i++) {
      
       var myvar1 = Math.abs(array[i]);
       var myvar2 = absolute;
      
       while (absolute && var1) { 
         absolute > myvar1 ? absolute %= myvar1 : myvar1 %= absolute; 
       } 
         absolute = Math.abs(myvar2*array[i]) / (absolute+myvar1);      
  }
  return absolute;
}

// Input
var array = [2, 4, 7];

// Call the LCM function
console.log(LCM(array));

//output
28

