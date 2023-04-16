// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

// Return type annotation: az elso a parameter(input), a masodik a return ertek tipusa
function greet(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}

function square(num: number): number {
  return num * num;
}

square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);

// Arrow function:
const add = (x: number, y: number): number => {
  return x + y;
};

// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color: string) => {
  return color.toUpperCase();
});

// Void: nincs return ertek semmi
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// Never
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
