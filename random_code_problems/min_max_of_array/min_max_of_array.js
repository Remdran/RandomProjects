// With ECMAScript 6 you can use the spread operator(...) to pass in an array to the Math.min() and Math.max() functions
// These functions don't usually accept an array and previously you would have to use .apply
// i.e

/*
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
*/

var min = function(list){
  return Math.min(...list);
}


var max = function(list){
    return Math.max(...list);
}

