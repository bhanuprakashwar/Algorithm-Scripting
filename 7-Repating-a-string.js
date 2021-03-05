/* Repeat a String Repeat a StringPassed
Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number.
 For the purpose of this challenge, do not use the built-in .repeat() method. */

function repeatStringNumTimes(str, num) {
    if(num<=0){
      return "";
    } else {
      let x= str;
      for(let i=1;i<num;i++){
          x = x + str;
      }
      return x;
    }
  }
  
  repeatStringNumTimes("abc", 3);