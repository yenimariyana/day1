var input  = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
 ]
 
 for (var i = 0; i <= input.length -1; i++){
   for (var i2 = 0; i2 <= input.length -1; i2++){
     var i3=i2+1
     switch(i2){
       case 0 : console.log ("Nomor ID: ", input [i] [i2]); break;
       case 1 : console.log ("Nama Lengkap: ", input [i] [i2]); break; 
       case 2 : console.log ("TTL: ", input [i] [i2]); break;
       case 3 : console.log ("Hobby: ", input [i] [i2]); break;
     }
   }
   console.log (" ")
 }