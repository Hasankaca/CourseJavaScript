// aynı evde kalan arkadaların sırasıyla bulaşık yıkama sorununun çözümü
let apart = [ "Ben", "Jenny", "Michael", "Chloe",  "Timmy" ];
let komsu = [ "Patrick", "AnnMarie", "Alisol" , "Walton"];
apart.push("Maks");
function whoIsWashing(apart){
let apartLength = apart.length;
let random = Math.floor(Math.random()*apartLength);

let randomPerson = apart[random]  ;
console.log(randomPerson + " is going to wash dishes today!") ;
}
whoIsWashing(apart);
whoIsWashing(komsu);
console.log(apart);
console.log(komsu);

