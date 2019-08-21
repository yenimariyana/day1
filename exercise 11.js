function balikKata(kata) {
    var msg = '';
    var txt = '';
    for (var i = kata.length-1; i >= 0; i--) {
      msg = msg + kata[i];
      txt = txt + kata[i];
    }
  
    return msg;
    return txt;
  }
  
  // TEST CASES