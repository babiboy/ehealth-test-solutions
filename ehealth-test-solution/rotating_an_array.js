/* ROTATING AN ARRAY 
Write a function that takes an array of integers and returns that array rotated by N positions. 
For example, if N=2, given the input array [1, 2, 3, 4, 5, 6] the function should return [5, 6, 1, 
2, 3, 4] */


//Answer

function rotate(array, n) {  
       while( n--) {   
             
       array.unshift(array.pop());    
  }
    return array;
}

//Test
var players = [1, 2, 3, 4, 5, 6 ];
rotate( players, 2);

console.log( players ); 

//output
[5, 6, 1, 2, 3, 4]