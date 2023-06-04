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

//2591. Distribute Money to Maximum Children
/*You are given an integer money denoting the amount of money (in dollars) that you have and another integer children denoting the number of children that you must distribute the money to.

You have to distribute the money according to the following rules:

1. All money must be distributed.
2. Everyone must receive at least 1 dollar.
3. Nobody receives 4 dollars.
Return the maximum number of children who may receive exactly 8 dollars if you distribute the money according to the aforementioned rules. If there is no way to distribute the money, return -1.*/
function distMoney(money: number, children: number): number {
  let numberOf8$Recieves: number = 0;

  return numberOf8$Recieves;
}
