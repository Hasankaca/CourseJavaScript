//Currency Conversions
const convertToUSD = (value) => {
  return value * 1.4;
}
const convertToBRL = (value) => {
  return (value * 0.99) * 5.7;
}
function strechFunc(currency, value) {
  if (currency === 'USD') {
    return convertToUSD(value);
  } else if (currency === 'BRL') {
    return convertToBRL(value);
  }
}
console.log(strechFunc('USD', 100));
console.log(strechFunc('BRL', 100));