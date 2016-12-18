// Sort a single Number input into descending order
// I.E Input = 123546   
//     Output = 654321

// Firstly convert the input to a string and split it 
// So it is now -> "1 2 3 5 4 6"

// Next call the strings sort() method and pass it in your reverse number sort function (original sort method is alphabetical)
// Next convert it back to a Number(integer) whilst also joining it to eliminate spaces


function descendingOrder(n){
  var digits = n.toString().split('');   //convert to string and split
  digits.sort(sortNumber);               
  var numbers = parseInt(digits.join('')); //convert back to an int or Number and join the spaces
  return numbers;
}

function sortNumber(a, b){
  return b - a;                 //sort in descending order, ascending order is (a - b)
}  


// This can all be done on 1 line, like so:

function descendingOrder(n){
 return parseInt(n.toString().split('').sort(function(a,b){return b-a}).join(''));
}