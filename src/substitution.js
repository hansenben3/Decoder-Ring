// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet || alphabet.length !== 26 || !checkUnique(alphabet)){
      return false;
    }
    let charArr = [];
    for(let i = 0; i < input.length; i++){
      charArr[i] = input.charAt(i)
    }
    let alphArr = [];
    for(let i = 0; i < alphabet.length; i++){
      alphArr[i] = alphabet.charAt(i)
    }
      if(encode === false){
      return decode(charArr, alphArr);
    }
    else{
    let resultArr = [];
    for(let i = 0; i < charArr.length; i++){
      if(charArr[i] === " "){
        resultArr[i] = charArr[i];
      }
      else{
      resultArr[i] = change(charArr[i], alphabet);
      }
    }
    console.log(resultArr);
    console.log(alphabet);
    return resultArr.join("");
    
  } 
  }
  
  function change(letter, subAlphabet) {
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let result;
    for (let i = 0; i < alphabet.length; i++){
      if(letter === alphabet[i]){
        result = subAlphabet[i];
      }
    }
    return result;
    
  }
  
  function checkUnique(subAlphabet){
    for(let i = 0; i < subAlphabet.length; i++){
      let letter1 = subAlphabet[i];
      for(let j = i+=1; j < subAlphabet.length; j++){
        let letter2 = subAlphabet[j];
        if(letter1 === letter2){
          return false;
        }
      }
    }
    return true;
  }
  
  function decode(inputArr, subAlphabet){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let resultArr = [];
    for(let i = 0; i < inputArr.length; i++){
      let letter = inputArr[i];
      if(letter === " "){
        resultArr[i] = letter;
      }
      else{
      for(let j = 0; j < subAlphabet.length; j++){
        let sub = subAlphabet[j];
        if(letter === sub){
          resultArr[i] = alphabet[j];
        }
      }
      }
    }
    return resultArr.join("");
  }
  

  return {
    substitution,
  };
})();




module.exports = { substitution: substitutionModule.substitution };
