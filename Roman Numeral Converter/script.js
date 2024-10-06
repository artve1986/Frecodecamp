const number = document.getElementById('number');
const btn = document.getElementById('convert-btn');
const output = document.getElementById('output');

function convertToRoman(num) {
 let romNum = {
   M: 1000,
   CM: 900,
   D: 500,
   CD: 400,
   C: 100,
   XC: 90,
   L: 50,
   XL: 40,
   X: 10,
   IX: 9,
   V: 5,
   IV: 4,
   I: 1,
 }
 let rom = '';
 for(let key in romNum){
   while (num >= romNum[key]){
     rom += key;
     num -= romNum[key];
   }
 }
 return rom;
}

const isValidInput = (str) => {
    
    let outputStr = '';
    let int = '';
    if(!str || str.match(/[e.]/g))
      {
        outputStr = 'Please enter a valid number.';
        return outputStr;
      } else {
        int = parseInt(str, 10);
      }

      if (int < 1) {
        outputStr = 'Please enter a number greater than or equal to 1'
      } else if (int > 3999) {
        outputStr = 'Please enter a number less than or equal to 3999'
      } else if(int > 0 && int < 4000) { outputStr = convertToRoman(int);}
      return outputStr
}

function resultOutput(str) {
  output.innerText = isValidInput(str);
  number.value = '';
}
btn.addEventListener('click', () => {resultOutput(number.value)});