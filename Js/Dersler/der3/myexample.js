let metin1={sayfa:1,metin:"Ali ata bak"};

let metin2={sayfa:2,metin:"Güneş teninde güzel"};

let metin3={sayfa:3,metin:"Bana sen lazım"};

let metin4={sayfa:4,metin:"Anlatmam derdimi dertsiz insana"};

let metin5={sayfa:5,metin:"Senin ağzından çıkanla kulağının duyduğu bir oluyor mu?"};

let metinler=[metin1,metin2,metin3,metin4,metin5];

let istenilenSayfa=Number(prompt("Sayfa sayısınız giriniz"));
 debugger;
if(istenilenSayfa==metinler[istenilenSayfa-1].sayfa){
    let sayma= metinler[istenilenSayfa-1].metin;
    sayma=karakterSayacı();
}else{
    console.log("Yanlış gridiniz.");
}

function karakterSayacı(){
    let metin1=metinler[istenilenSayfa-1];
   let karakterSayisi = metin1.metin.length;
    console.log(karakterSayisi);};
   

