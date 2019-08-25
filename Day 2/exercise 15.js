function groupAnimals(animals) {
    var namaAkhir = [];
    for ( var i = 0; i < animals.length; i++) {
     
      var hurufA = [];
      var hurufC = [];
      var hurufK = [];
      var hurufU = [];
      
      for ( var j = 0; j < animals.length; j++) {
        if( animals[j][0] === 'u') {
          hurufU.push(animals[j]);
        }else if(animals[j][0] === 'a') {
          hurufA.push(animals[j]);
        } else if( animals[j][0] === 'c' ) {
          hurufC.push(animals[j]);
        } else if( animals[j][0] === 'k' && animals[j][1] ==='u') {
          hurufK.push(animals[j]);
        } 
      }
    }
    namaAkhir.push(hurufA);
    namaAkhir.push(hurufC);
    namaAkhir.push(hurufK);
    namaAkhir.push(hurufU);
    return namaAkhir;
  }
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
  
  