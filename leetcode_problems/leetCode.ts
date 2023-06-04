//2469. Convert the Temperature
function convertTemperature(celsius: number): [number, number] {
  let kelvin: number = 0;
  let fahrenheit: number = 0;
  kelvin = celsius + 273.15;
  fahrenheit = celsius * 1.8 + 32.0;
  return [kelvin, fahrenheit];
}

console.log(convertTemperature(32.0));

//1512. Number of Good Pairs
function numIdenticalPairs(nums: number[]): number {
  let joParokSzama: number = 0;
  for (let i: number = 0; i < nums.length; i++) {
    for (let j: number = 0; j < nums.length; j++) {
      if (nums[i] == nums[j] && i < j) {
        joParokSzama++;
      }
    }
  }
  return joParokSzama;
}

console.log(numIdenticalPairs([1, 1, 1, 1]));

//2413. Smallest Even Multiple
function smallestEvenMultiple(n: number): number {
  let legkisebbOszto: number = 0;
  for (let i: number = 1500; i > 1; i--) {
    if (i % n == 0 && i % 2 == 0) {
      legkisebbOszto = i;
    }
  }
  return legkisebbOszto;
}
console.log(smallestEvenMultiple(77));

//1281. Subtract the Product and Sum of Digits of an Integer
function subtractProductAndSum(n: number): number {
  let eredmeny: number = 0;
  let productOfDigits: number = 1;
  let sumOfDigits: number = 0;
  let nToString = String(n);
  for (let i: number = 0; i < nToString.length; i++) {
    productOfDigits *= Number(nToString[i]);
    sumOfDigits += Number(nToString[i]);
  }

  eredmeny = productOfDigits - sumOfDigits;
  return eredmeny;
}
console.log(subtractProductAndSum(234));
