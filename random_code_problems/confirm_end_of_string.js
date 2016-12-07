// Confirm the ending of a string without using endsWith();

function confirmEnding(str, target) {
    
  if (str.substr((str.length - target.length)) == target) {
    return true;
  }
  else {
    return false;
  }
}

confirmEnding("Connor", "n");