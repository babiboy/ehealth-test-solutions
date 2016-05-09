/* CHARACTERS IN STRINGS 
    Implement a function with signature find_chars(string1, string2) that takes two strings and 
    returns a string that contains only the characters found in string1 and string two in the order 
    that they are found in string1. Implement a version of order N*N and one of order N.*/




//  Answer


// Implement the function of the order N*N
function find_charsNxN(String1, String2) {
    var var1 = ""
    var a;
    var b;
    for(a = 0; a < String1.length; a++ ) {
        for(b =0; b < String2.length; b++) {
            if(String1[a] === String2[b]) {
                var1 = var1 + String1[a];
            }
        }
    }
    return var1;
}

//Implement the function of the order N
function find_charsN(String1, String2) {
    var var1 = "";
    var a ;
        for(a = 0; a < String1.length; a++ ) {
            if(String2.indexOf(String1[a]) != -1) {
            var1 = var1 + String1[a];
        }
    }
    return var1;
}

