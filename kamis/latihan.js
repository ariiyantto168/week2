// Function sederhana tanpa return

function tampilkan() {
    console.log("halo!");
  }
  
  tampilkan();

  function munculkanAngkaDua() {
    return 2
  }
  
  var tampung = munculkanAngkaDua();
  console.log(tampung)

//   Function dengan parameter

function kalikanDua(angka) {
    return angka * 2
  }
  
  var tampung = kalikanDua(10);
  console.log(tampung)

  function kalikanSepuluh(angka){
      return angka * 5
  }
  var proses = kalikanSepuluh(10)
  console.log(proses);
  
//   Pengiriman parameter lebih dari satu
function tampilkanAngka(angkaPertama, angkaKedua) {
    return angkaPertama + angkaKedua
  }
  
  console.log(tampilkanAngka(5,3))

// function ParameterLebihdrsatu(text1, text2){
//     return text1 == text2
// }
// console.log(ParameterLebihdrsatu(text1, text2));


// Inisialisasi parameter dengan nilai default
function tampilkanAngka(angka = 1) {
    return angka
  }
  
  console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
  console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1



//   Kita juga dapat menampung function sebagai variable dengan sebuah bentuk function yang dinamakan Anonymous Function
var fungsiPerkalian = function(angkaPertama, angkaKedua) {
    return angkaPertama * angkaKedua
  }
  
  console.log(fungsiPerkalian(5,4))