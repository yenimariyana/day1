function palindrome(kata){
  var kosong= "";
  for (var j =kata.length-1; j>=0; j--){
    kosong += kata[j];
  }
  if (kosong===kata){
    return true;
  }else{
    return false;
  }
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false