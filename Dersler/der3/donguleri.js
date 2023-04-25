

// let sayac=1;

// while(sayac<=10){
//     console.log(sayac);

//     sayac++;
// }

// let sayac=1;

// do{
//     console.log(sayac);
//     sayac++;

// }while(sayac<=10);


// ------ÇARPIM TABLOSU
// for(let i = 1; i<=10; i++){
//     for(let j=1;j<=10; j++){
//         console.log(i+"x"+j+"="+(i*j));
//     }
// }



// ------ ASAL SAYI ---------



// let sayi=prompt("Lütfen sayıyı giriniz:");
// let carpim=1;
// let sonuc= true;
// for(let i=2; i<=Math.floor(sayi/2); i++){
//     if(sayi%i==0){
//         sonuc=false;
//         break;
//     } 
// }
// if(sonuc){
//     alert(sayi + " asaldır.")
// }else{
//     alert(sayi + " asal değildir.")
// 

// for(let i=1;i<=sayi;i++){
//     carpim=carpim*i;
// }
// alert("Sonuç :" + carpim);



// ----------Arm Strong------
// let sayi=prompt("Lütfen sayıyı giriniz:");
// let toplam=0;

// for(let i=0;i<sayi.length;i++){
//     let rakam = sayi.charAt(i);
//     toplam+=rakam*rakam*rakam;

// }
// if(Number(sayi)==toplam){
//     alert("Armstrong sayısıdır.")
// }else{
//     alert("Değildir.")
// }
