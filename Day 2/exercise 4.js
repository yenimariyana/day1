function dataHandling2(satu,dua){
    var array=["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
    array.splice(5, 0, satu,dua); 
    array.splice(1, 2,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung"); 
    array.splice(4, 1)
    var bulan = array[3];
    var kata = bulan.split("/");
    console.log(kata);
    var baru = kata[1];
    switch(parseInt(baru)) {
      case 01:   { var bualan_huruf= "Januari"  };break;
      case 02:   { var bualan_huruf= "Februari"  };break;
      case 03:   { var bualan_huruf= "Maret"  };break;
      case 04:   { var bualan_huruf= "April"  };break;
      case 05:   { var bualan_huruf= "Mei"  };break;
      case 06:   { var bualan_huruf= "Juni"  };break;
      case 07:   { var bualan_huruf= "Juli"  };break;
      case 08:   { var bualan_huruf= "Agustus"  };break;
      case 09:   { var bualan_huruf= "September"  };break;
      case 10:   { var bualan_huruf= "Oktober"  };break;
      case 11:   { var bualan_huruf= "November"  };break;
      case 12:   { var bualan_huruf= "Desember"  };break;
     
    };
    console.log(kata[2]+"-"+kata[1]+"-"+kata[0])
    console.log(array[1])
    console.log(bualan_huruf);
     return array;
    
    }
    console.log(dataHandling2("Pria", "SMA Internasional Metro")); 