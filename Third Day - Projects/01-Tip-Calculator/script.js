

let firstBill = 324;
let secondBill = 48;
let thirdBill = 75;
let fourthBill = 268;
let budget = 750;

function calculateTips(bill){
  let bahsis ;
  if (bill <= 50 ){
    bahsis = bill * 0.2;
  }else if (bill > 50 && bill < 200){
    bahsis = bill * 0.15 ;
}   else {
  bahsis = bill * 0.1 ;
  
}
return Math.floor(bahsis);
}


console.log(calculateTips(firstBill))
console.log(calculateTips(secondBill))
console.log(calculateTips(thirdBill))
console.log(calculateTips(fourthBill))

function getTotalTips(){
return  calculateTips(firstBill) + calculateTips(secondBill) + calculateTips(thirdBill) + calculateTips(fourthBill);
  }
  console.log(getTotalTips() + "Toplam elde edilen bahşiş miktarı" )
  
  function budgetDust(){
    
    let totalBill = firstBill + secondBill + thirdBill + fourthBill ;
    let lastBudget = budget - (totalBill + getTotalTips() ) ;  

    if (totalBill + getTotalTips() >= (budget * 0.8) ) {
      console.log(`yüzde seksene ulaştınız, Haddinizi aşmayınız `);
    }else { 
      console.log(`Tasarruf teknikleriniz için Tebrikler` ) ;
    }
  }
  budgetDust() ;

   
  