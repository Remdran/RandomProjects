// Repeat a string n number of times

function repeatStringNumTimes(str, num) {
  if (num >= 0) {
    str = str.repeat(num);
  }
  else {
    str = "";
  }
  return str;
}

repeatStringNumTimes("abc", 3);