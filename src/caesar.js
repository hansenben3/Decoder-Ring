// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // return false if shift is 0 less then -25 or greater then 25
    if(shift === 0 || shift < -25 || shift > 25){
      return false;
    }
    // take the input and split it into an array of letters 
    let charArr = [];
    for(let i = 0; i < input.length; i++){
      charArr[i] = input.charAt(i)
    }
    console.log(charArr);
    if(encode === false){
      if (shift < 0){
        shift = Math.abs(shift);
      }
      else{
        shift -= shift*2
      }
    }
    else{
      shift = shift;
    }
    console.log(shift);
    // charArr is array of letters from the input word
    // now we need to take each letter in charArr and shift them into resultArr
    let resultArr = [];
    for(let i = 0; i < charArr.length;i++){
      if(charArr[i] === (" " || "!" || "." || "?")){
        resultArr[i] = charArr[i];
      }
      else{
        resultArr[i] = change(charArr[i], shift);
      }
    }
    console.log(resultArr);
    //then for each letter in the string  shift it.
    let resultString = resultArr.join("");
    console.log(resultString);
    return resultString;

  }

  return {
    caesar,
  };
  
  function change(letter, shift){
  if(letter === ("." || "," || "!" || "?" || " ")){
    return letter;
  }
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  let change;
  let result;
  for(let i = 0; i < alphabet.length; i++){
    if(shift === 0 || i < (Math.abs(shift))){
      change = 26+i + shift;
    }
    else{
      change = i + shift;
    }
    if(change >= 26){
      change -= 26;
    }
    if(letter.toLowerCase() === alphabet[i]){
      result = alphabet[change];
    }
  }
  return result;
}

})();
 

module.exports = { caesar: caesarModule.caesar };
