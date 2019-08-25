function angkaPalindrome(num) {
    var hasil = 0;
    var isiPalindrome = false; 
    var apaPalindrome = 0;
    var ubahBentuk = '';
    while(isiPalindrome === false) {
      num++;
      ubahBentuk = num.toString();
      reverse = " ";
      for(a = ubahBentuk.length -1; a >= 0; a--) {
        reverse += ubahBentuk[a];
      }
      apaPalindrome = parseInt(reverse);
      if(apaPalindrome == num) {
        isiPalindrome = true;
        hasil = num;
      }
    }
    return hasil;
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001