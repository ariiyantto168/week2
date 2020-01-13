// 1. susun bintang

var rows1 = 5;
var a=0;
var b = '*';
var i=0;



while (a<rows1) {
    console.log('*');
    a++;
  }

//   2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2 = 5;


while (i<rows2) {
  var asteriks = '*';
  var j = 1;
  while (j<rows2) {
    asteriks = asteriks + '*';
    j++;
  }
  console.log(asteriks);
  i++;
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 5;
var initial = 1;
var i = 0;

while (i<rows3) {
    var pyramid = '*';
    var j=0;
    while (j<i) {
      pyramid = pyramid +'*';
      j++;
    }
    console.log(pyramid);
    i++;
  }



