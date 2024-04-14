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
  


const result = document.getElementById("result");
const button = document.getElementById("check-btn");
function btnclick(){
  const str = document.getElementById("text-input").value;
  if(str){
    if(palindrome(str) === true) {
      result.innerHTML = `<p><b>${str}</b> is a palindrome.</p>`; 
    } else {result.innerHTML = `<p><b>${str}</b> is not a palindrome.</p>`;}
  } else {window.alert("Please input a value")}
}
button.addEventListener('click', btnclick);