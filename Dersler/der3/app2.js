// let sayi =prompt("1-5 arası sayı giriniz");

// switch(sayi){
//     case "1":
//         alert("1 girdiniz");
//         break;
//     case "2":
//         alert("2 girdiniz")
    
// }

let bakiye= 1000;
let yeniSatir= "\n\r";
let islem= prompt("1- Bakiye görüntüleme" + yeniSatir+
"2- Para çekme" + yeniSatir + "3- Para yatırma"+ yeniSatir+
"4-Çıkış");
let tutar;
let sonuc;

switch(islem){
    case "1":
        console.log(bakiye);
    break;
    case "2":
        tutar = Number(prompt("Yatıracağnız tutarı belirleyiniz"));
        if(tutar<bakiye){
            sonuc = tutar+bakiye;
            alert("Bakiyeniz"+ yeniSatir + sonuc);

        }else{
            alert("Bakiyeniz yetersiz" );
        }

    break;
    case "3":4
    
        tutar = Number(prompt("Yatıracağnız tutarı belirleyiniz"));
        sonuc = bakiye-tutar;
        alert("Bakiyeniz"+ yeniSatir + sonuc);
    break;   
    case "4":
        alert("Çıkış yapıldı")
        break;

    default:
        alert("1 ile 4 arası seçiniz")

}
