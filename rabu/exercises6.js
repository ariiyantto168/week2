// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while. 
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan menghitung mundur.
//  Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.

// 1. i love coding and i will become fullsatack developer

var a = 2;
var b = 20;
var c = 0;
var looping = 2;

console.log('Looping Pertama');

// use while
while (a <= b) {
    console.log(a + ' - I Love Coding')
    a += looping;
}

console.log('Looping kedua');
a = a - 2;

while (a > c ) {
    console.log(a + ' - I will become fullstack developer');
    a -=looping;
}

// 2.  menggunakan for 

console.log('Looping Pertama');
for (a; a <= b; a += looping) {
    console.log(a + ' -  I Love codinng');    
}

console.log('Looping Kedua');
a = a - 2;

for (a; a > c; a -= looping) {
    console.log(a + ' - I will become fullstack developer');    
}


// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:

// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL

var x = 1;
    for(i = x; i <= 100; i++){
        if ((i % 2) == 0) {
            console.log('Genap');
            
        }else{
            console.log('ganjil');            
        }
    }


    // Pada 3 perulangan baru ini periksa setiap angka counter:

    // Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
    // Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
    // "3 kelipatan 3"dan seterusnya.

    // pertambahan kelipatan 3
    console.log('Pertambahan Kelipatan 3');
    
    for(i = 1; i <= 100; i+=2){
        var counter = i;
        if((counter % 3)=== 0){
          console.log(i + ' KELIPATAN ' + i);
        }
       
      }
    //   Pertambahan Kelipatan 5

    console.log('Pertanbahan Kelipatan 5');
    for(i = 1; i <= 100; i+=5){
        var counter = i;
        if ((counter % 6) === 0) {
            console.log(i + ' Kelipatan ' + i);
            
        }
    }

    //   Pertambahan Kelipatan 9
    console.log('Pertanbahan Kelipatan 9');
    for(i = 1; i <=100; i+=9){
        var counter = i;
        if((counter % 10)=== 0){
          console.log(i + ' Kelipatan ' + i);
        }
      }
      