module.exports=function reverseANumber(number) {
  tempNumber = number;
  places = 0;
  result = 0;//1
  while (tempNumber >= 1) {
    tempNumber = tempNumber / 10;
    places++;
  }
  // console.log(places);
  for (let i = 0; i < places; i++) {
    divider = Math.pow(10, places - 1 - i);
    // console.log(number,"  ",divider);
    let a = Math.floor(number / divider);
    number = number - a * divider;
    result = result + a * Math.pow(10, i);
    // console.log(a);
  }
  return result;
}

