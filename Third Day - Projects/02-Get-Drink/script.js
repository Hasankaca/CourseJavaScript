//Get drink
function calcBottles(totalMoney, adetFiyat) {
  return Math.floor(totalMoney / adetFiyat);
}
function calcChange(totalMoney, adetFiyat) {
  return totalMoney % adetFiyat;
}
function getDrink(totalMoney, adetFiyat) {
  return `With your total $${totalMoney} money you can buy ${calcBottles(totalMoney, adetFiyat)} bottles of drinks your remaining money $${calcChange(totalMoney, adetFiyat)}`;
}
console.log(getDrink(394, 15));

function getDrink(totalMoney, adetFiyat){
 console.log("Leave House");
 

}
