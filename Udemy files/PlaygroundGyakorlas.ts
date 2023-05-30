//1.
function randomTombGeneralas(darab: number) {
    let randomSzamokTombje:number[] = [];
    for (let i = 0; i < darab; i++) {
        randomSzamokTombje.push(Math.round(Math.random() * 100))
    }
    return randomSzamokTombje
}

console.log(randomTombGeneralas(10))