

let yeniSatir= "\n\r";
let turkceD, turkceY=0;
let matD, maty=0;
let sosyalD, sosyalY=0;
let fenD, fenY=0;
let puan=0;
const osym=100;
let okulPuani=0;
let dogruSayi=0;
let yanlisSayi=0;
let kalan=0;


let mesaj = "TYT PUAN HESAPLAMA UYGLAMASI" + yeniSatir +
"1- Puan Hesapla" + yeniSatir + "2- Çıkış";


let secim= prompt(mesaj)


switch(secim){
    case "1":
        turkceD=Number(prompt("Türkçe doğruyu giriniz"));
        turkceY=Number(prompt("Türkçe doğruyu giriniz"));

        matD=Number(prompt("Mat doğruyu giriniz"));
        maty=Number(prompt("Mat doğruyu giriniz"));

        sosyalD=Number(prompt("Sosyal doğruyu giriniz"));
        sosyalY=Number(prompt("Soyal doğruyu giriniz"));

        fenD=Number(prompt("Fen doğruyu giriniz"));
        fenY=Number(prompt("Fen doğruyu giriniz"));

        dogruSayi=fenD+matD+sosyalD+turkceD;
        yanlisSayi=fenY+sosyalY+maty+turkceY;
        kalan= dogruSayi - (yanlisSayi/4);
        okulPuani=Number(prompt("Okul puanı giriniz"));
        puan=(kalan*4)+(okulPuani%60)+osym;
        alert("Tyt puanınız :"+ puan)
        




        

        

    case "2":
        break;

    default:
    break;
}