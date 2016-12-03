/* 
 * Check to see if a string is a palindrome (spelled the same forwards and backwards)
 */

function palindrome(str) {

  var newStr = str.lowerCase().replace(/[^A-Za-z0-9]/g, '');   // Using regular expression check to see if it matches a non a-z0-9 value (note the ^) which is (!=)
   
  var revStr = newStr.split("").reverse().join("");  // Firstly split the string into an array of chars, reverse those chars and then join them up again 

  if(newStr == revStr){   // Finally check to see if the two strings are equal
    return true;
  }
  else{
    return false;
  }
}
  
  

palindrome("My age is 0, 0 si ega ym.");  //false
//palindrome("race car"); //true



// https://medium.freecodecamp.com/two-ways-to-check-for-palindromes-in-javascript-64fea8191fd7 has a small write up and other ways