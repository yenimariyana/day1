function pasanganTerbesar(num) {
    var hasil =String(num);
    var banding = " ";
  var panjang = hasil.length;
  for (var i=0; i < panjang; i++){
    var coba= Number(hasil[i]+hasil[i+1]);
   if (coba > banding){
        banding = coba
      }
  }
   return banding;
  }
  
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99