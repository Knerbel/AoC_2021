const fs = require('fs');
const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });

let fishes = [];
for (const fish of input.split(',')) {
  fishes.push(+fish);
}
// let fishes = [3, 4, 3, 1, 2];

for (let i = 1; i < 18 + 1; i++) {
  const newFishes = [];
  const oldFishes = []


  for (let fish of fishes) {
    if (fish === 0) {
      fish = 6 + 1;
      newFishes.push(8)
    }
    fish--;
    oldFishes.push(fish);
  }


  for (const newFish of newFishes) {
    oldFishes.push(newFish);
  }
  fishes = oldFishes;
  console.log(`After ${i} day(s): ${fishes.length}`)
}

console.log(fishes.length)
