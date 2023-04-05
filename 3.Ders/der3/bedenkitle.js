// // BEDEN KİTLE ENDEKSİ

// let boy=Number(prompt("Lütfen boyunuzu giriniz:"));

// let kilo=Number(prompt("Lütfen kilonuzu giriniz:"));

// let sonuc= kilo/(boy*2);

// if(sonuc<18.5){

// }else if(sonuc>=18.5 && sonuc<=24.9){
//     console.log("İdeal kilo altındasınız." + sonuc)

// }else if(sonuc>=25 && sonuc<=29.9){
//     console.log("İdeal kilodasınız." + sonuc)

// }else if(sonuc>=30 && sonuc<=39.9){
//     console.log("Kilolusunuz" + sonuc)

// }else if(sonuc>=40){
//     console.log("Obezsiniz" + sonuc)

// }

// -------------BENZİN İSTASYONU UYGULMASI-----------


/*
            1.DİZEL  : 24.53
            2.BENZİN : 22.25
            3.LPG    : 11.1


            Gelen müşteriden alacağımız bilgiler;
            1-Yakıt tipi
            2.Yüklenecek yakıt litresi

*/




// let dizel= 24.53, lpg=11.1, benzin= 22.25;
// const yeniSatir= "\r\n";


// let yakitMetni="1-Dizel"+yeniSatir
// +"2-Benzin"+yeniSatir
// +"3-Lpg"+yeniSatir
// +"Yakıt türü seçiniz";
// let yakitTipi=(prompt(yakitMetni ));
// let yakitLitresi=Number(prompt("Kaç litre istiyorsunuz?"));
// let bakiye=Number(prompt("Bakiyenizi giriniz:"));
// if(yakitTipi=="1"){
//     let odenecekTutar= dizel * yakitLitresi;
//     if(odenecekTutar<bakiye){
//         console.log("Kalan bakiyeniz:"+(bakiye-odenecekTutar));
//     }else{
//         console.log("Paranız çıkışmadı.");
//     }

// }else if(yakitTipi=="2"){
//     let odenecekTutar= benzin * yakitLitresi;
//     if(odenecekTutar<bakiye){
//         console.log("Kalan bakiyeniz:"+(bakiye-odenecekTutar));
//     }else{
//         console.log("Paranız çıkışmadı.");
//     }
// }else if(yakitTipi=="3"){
//     let odenecekTutar= lpg * yakitLitresi;
//     if(odenecekTutar<bakiye){
//         console.log("Kalan bakiyeniz:"+(bakiye-odenecekTutar));
//     }else{
//         console.log("Paranız çıkışmadı.");
//     }
// }else{
//     alert("Yanlış girdiniz.");
// }