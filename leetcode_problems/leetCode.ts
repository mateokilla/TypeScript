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
