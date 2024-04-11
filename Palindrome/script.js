function palindrome(str) {
    const arr = [];
    const arrRev = []
    for (let i = 0; i < str.length; i++ ){
  if(str[i].match(/[0-9a-z]/i)){
  arr.push(str[i].toLowerCase());
  arrRev.unshift(str[i].toLowerCase());
  }
    }
    if(arr.join('') == arrRev.join('')){
      return true 
    } else {
      return false
    }
  }
  
const str = document.getElementById("text-input").value;
const result = document.getElementById("result");
function btnclick(){

}