let count = 0;

function cc(card) {
  // Змініть код лише під цим рядком

if (card > 1 && card < 7){
  count +=1;
}
else if (card==10 || card=='J' || card=='Q' || card=='K' || card=='J'){
  count -= 1;
}
else count = count;
if (count > 0) {
  return count + ' Bet';
}
else return count + ' Hold';
  return "Change Me";
  // Змініть код лише над цим рядком
}

cc(2); cc(3); cc(7); cc('K'); cc('A');