
// // Parametresiz
// function yazdir(){
//     debugger;
//     console.log("Eyüp Balcan")
// }

// debugger;
// yazdir;


// // Parametteli
// function yazdir1(isim,soyisim){
//     debugger;
//     console.log(isim+ " " + soyisim);
// }

// debugger;
// yazdir1;
// // void geriye döndürmeyen metottur

// // Geriye değer döndüren metotlar

// let donenDeger = cube(3);
// console.log(donenDeger);

// function cube(sayi){
//     let sonuc=sayi*sayi*sayi;
//     return sonuc;
// }




// Kelime Sayısı Uygulaması


// let metin="Şuanda Yalova'da Javascript eğitimi çekmekteyim";
// let harf=prompt("Harfi giriniz");
// let sonuc=bul(harf);
// alert(sonuc)
// function bul(harf){
//     let toplam=0;
//     for(let i=0 ; i<metin.length;i++){
//         if(metin.charAt(i)===harf){
//             toplam+=1;
//         }
//     }
//     return toplam;

// }


// Mükemmel Sayı Uygulaması

// function isPerfectNumber(number){
//     let toplam=0;
//     for(let i=2; i<=number/2;i++){
//         if(number%i==0){
//             toplam+=i;
//         }
//     }
//     toplam+=1+number;
// }



let binary="1011";

function convertBinaryToDecimal(binary){
    let toplam=0;
    let ust=0;
    for(let i= binary.length-1 ; i>=0 ;i--){
        toplam+=Number(binary.charAt(i)) *Math.pow(2,ust);
        ust++;

    }
    console.log(toplam)
}

convertBinaryToDecimal(binary);