function rot13(str) { 
  var arr = [];
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) > 77 && str.charCodeAt(i) < 91) {
      arr.push(str.charCodeAt(i) - 13);
    }
    else if(str.charCodeAt(i) < 78 && str.charCodeAt(i) > 64) {
      arr.push(str.charCodeAt(i) + 13);
    }
    else {
      arr.push(str.charCodeAt(i));
    }
  }
  
    for (var j = 0; j < arr.length; j++){
      newStr += String.fromCharCode(arr[j]);
    }
  
  return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");