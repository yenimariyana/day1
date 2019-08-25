function balikkata(kata){
  
    var a = kata.length-1;
    var b = " ";
    
    for (var c = a; c >= 0; c--) {
          b += kata [c];
    }
      return (b);
    }
    console.log (balikkata ('hello world!'));
   