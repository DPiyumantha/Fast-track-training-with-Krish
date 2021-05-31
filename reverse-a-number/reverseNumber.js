function reverseANumber(number) {
  tempNumber = number;
  places = 0;
  result = 0;

  while (tempNumber >= 1) {
    tempNumber = tempNumber / 10;
    places++;
  }
  //Going through digits of a number from front
  //Multiply by 10's multiples from 1
  //Take addition as the reversed number
  for (let i = 0; i < places; i++) {
    divider = Math.pow(10, places - 1 - i);
    let remainder = Math.floor(number / divider);
    number = number - remainder * divider;
    result = result + remainder * Math.pow(10, i);
  }
  return result;
}

module.exports=function printReversedNumber(number){
  console.log("Reversed number for ",number," : ",reverseANumber(number))
}

