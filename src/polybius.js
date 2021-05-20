// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function addSpace(string, index){
    return string.substring(0, index) + " " + string.substring(index, string.length);
  }
  
  
  function polybius(input, encode = true) {
    // need to check to see if the input is odd
    // remove the spaces if there are any then get a length count???
    //split length of the array
    
    if(encode === true){
    let charArr = [];
    for(let i = 0; i < input.length; i++){
      charArr[i] = input.charAt(i)
    }
    console.log(charArr);
    let resultArr = [];
    for(let i = 0; i < charArr.length; i++){
      if(charArr[i] === " "){
        resultArr[i] = charArr[i];
      }
      else{
      let a = polyChange(charArr[i]);
      if(a){
        resultArr[i] = a;
      }
      }
    }
    console.log(resultArr);
    return resultArr.join("");
  }
  else{// this is the main else
    let lengthCheck = input.split(" ");
    let total = 0;
    for(let i = 0; i < lengthCheck.length;i++){
      total += lengthCheck[i].length 
    }
    if(total % 2 !== 0){
      return false
    }
    let length = input.length/2;
     let charArr = [];
    let charString = "";
    if(input.includes(" ")){
    for(let i = 0; i < input.length; i++){
      if(input.charAt(i) === " "){
        let x = i += 1;
        charString = addSpace(input, x)
        length++;
      }
    }
    }
    else{
      charString = input;
    }
    console.log(charString);
    
    for (let i = 0; i < length; i++){
     if(i === 0){
       let x = i + 1;
       charArr.push(charString.charAt(i) + charString.charAt(x));
     }
      else if (i === 1){
        let x = i + 1;
        charArr.push(charString.charAt(x) + charString.charAt(x+=1));
      }
      else{
        let x = i * 2;
        charArr.push(charString.charAt(x) + charString.charAt(x+=1));
      }
      
    }
    console.log(charArr);
    let resultArr = [];
    for (let i = 0; i < charArr.length; i++){
      if(charArr[i] === "  "){
        resultArr[i] = charArr[i];
      }
      else{
      let a = polyDecode(parseInt(charArr[i]));
      resultArr[i] = a;
      }
    }
    console.log(resultArr);
    let result;
    if(resultArr.includes(false)){
      result = resultArr.slice(0,resultArr.length - 1)
    }
    else{
      result = resultArr;
    }
    if(result.includes("  ")){
      for(let i = 0; i < result.length; i++){
        if(result[i] === "  "){
          result[i] = " ";
        }
      }
    }
    return result.join("");
    
    }
  }

  return {
    polybius,
  };
  
  function polyDecode(number){
    let result;
    switch(number){
      case 11:
        result = "a";
        break;
      case 21:
        result = "b";
        break;
      case 31:
        result = "c";
        break;
      case 41:
        result = "d";
        break;
      case 51:
        result = "e";
        break;
      case 12:
        result = "f";
        break;
      case 22:
        result = "g";
        break;
      case 32:
        result = "h";
        break;
      case 42:
        result = "i/j";
        break;
      case 52:
        result = "k";
        break;
      case 13:
        result = "l";
        break;
      case 23:
        result = "m";
        break;
      case 33:
        result ="n";
        break;
      case 43:
        result = "o";
        break;
      case 53:
        result = "p";
        break;
      case 14:
        result = "q";
        break;
      case 24:
        result = "r";
        break;
      case 34:
        result = "s";
        break;
      case 44: 
        result = "t";
        break;
      case 54:
        result = "u";
        break;
      case 15:
        result = "v";
        break;
      case 25:
        result = "w";
        break;
      case 35:
        result = "x";
        break;
      case 45:
        result = "y";
        break;
      case 55:
        result = "z";
        break;
      default:
        result = false;
    }
    return result;
  }
  
  
  function polyChange(letter){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    let numLetter;
    for (let i = 0; i < alphabet.length; i++){
      if(alphabet[i] === letter.toLowerCase()){
        numLetter = i;
      }
    }
    console.log(numLetter);
    let result;
    switch (numLetter){
      case 0:
        result = 11;
        break;
      case 1:
        result = 21;
        break;
      case 2:
        result = 31;
        break;
      case 3: 
        result = 41;
        break;
      case 4:
        result = 51;
        break;
      case 5:
        result = 12;
        break;
      case 6:
        result = 22;
        break;
      case 7:
        result = 32;
        break;
      case 8:
        result = 42;
        break;
      case 9:
        result = 42;
        break;
      case 10:
        result = 52;
        break;
      case 11:
        result = 13;
        break;
      case 12:
        result = 23;
        break;
      case 13:
        result = 33;
        break;
      case 14:
        result = 43;
        break;
      case 15:
        result = 53;
        break;
      case 16:
        result = 14;
        break;
      case 17:
        result = 24;
        break;
      case 18:
        result = 34;
        break;
      case 19:
        result = 44;
        break;
      case 20:
        result = 54;
        break;
      case 21:
        result = 15;
        break;
      case 22: 
        result = 25;
        break;
      case 23:
        result = 35;
        break;
      case 24:
        result = 45;
        break;
      case 25:
        result = 55;
        break;
      default:
        result = false;
        
     
      }
    console.log("result : " + result);
    return result;
    }
  
})();

module.exports = { polybius: polybiusModule.polybius };
