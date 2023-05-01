// let isimler=["Enes","Yakup","Bilal","Kübra","Ayşenur","Adem"];

// let index = isimler.indexOf("Adem");
// console.log(index);

// -------DİZİ ÖRNEK----

let urun1={
    isim: "ACER Swift",
    kategorisi: "Teknoloji",
    fiyat: 7.000,
}
let urun2={
    isim: "ACER Nitro5",
    kategorisi: "Teknoloji",
    fiyat: 15.475
}
let urun3={
    isim: "ACER Gaming",
    kategorisi: "Teknoloji",
    fiyat: 13.500
}
let urun4={
    isim: "LENOVA V15",
    kategorisi: "Teknoloji",
    fiyat: 4.399
}
let urun5={
    isim: "LENOVA idepad",
    kategorisi: "Teknoloji",
    fiyat: 4.399
}
let urun6={
    isim: "LENOVA V14",
    kategorisi: "Teknoloji",
    fiyat: 4.399
}

let urunler=[urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler= [];
let kullaniciUrunİsmi=prompt("İstediğiniz bilgisayarı yazınız:");

getFiltreliUrunler(urunler);
filtreliUrunuleriYazdır(filtreliUrunler);

function getFiltreliUrunler(urunler){
    urunler.forEach(function(urun){
        if(urun.isim.toUpperCase().includes(kullaniciUrunİsmi.toUpperCase(),0)){
            filtreliUrunler.push(urun);
        }
    
    });
}

function filtreliUrunuleriYazdır(urunler){
    urunler.forEach(function(urun){
        console.log("--------------------------------")
        console.log(urun.isim+"|"+urun.fiyat+"|"+urun.lkategori);
    });
}