//2469. Convert the Temperature
function convertTemperature(celsius) {
    var kelvin = 0;
    var fahrenheit = 0;
    kelvin = celsius + 273.15;
    fahrenheit = celsius * 1.8 + 32.0;
    return [kelvin, fahrenheit];
}
console.log(convertTemperature(32.0));
//1512. Number of Good Pairs
function numIdenticalPairs(nums) {
    var joParokSzama = 0;
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i < j) {
                joParokSzama++;
            }
        }
    }
    return joParokSzama;
}
console.log(numIdenticalPairs([1, 1, 1, 1]));
//2413. Smallest Even Multiple
function smallestEvenMultiple(n) {
    var legkisebbOszto = 0;
    for (var i = 1500; i > 1; i--) {
        if (i % n == 0 && i % 2 == 0) {
            legkisebbOszto = i;
        }
    }
    return legkisebbOszto;
}
console.log(smallestEvenMultiple(77));
//1281. Subtract the Product and Sum of Digits of an Integer
function subtractProductAndSum(n) {
    var eredmeny = 0;
    var productOfDigits = 1;
    var sumOfDigits = 0;
    var nToString = String(n);
    for (var i = 0; i < nToString.length; i++) {
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
function distMoney(money, children) {
    var numberOf8$Recieves = 0;
    return numberOf8$Recieves;
}
