function bringBat(taka){
    console.log('for buy a bat i have',taka);
    console.log('give a bat now');
    var batPrice=4;
    var batQuantity=taka /batPrice;
    return batQuantity;
}
var dollar = 20;
var bat = bringBat(dollar);
console.log('take those bat now', bat);
