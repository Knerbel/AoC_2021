const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });


let numbers = [];

for (let y = 0; y < input.split('\n').length; y++) {
  const line = input.split('\n')[y];
  const idk = [];
  for (let x = 0; x < line.length; x++) {
    if (line[x] !== '\r')
      idk.push(+line[x]);
  }
  numbers.push(idk);
}
// numbers = [
//   [2, 1, 9, 9, 9, 4, 3, 2, 1, 0],
//   [3, 9, 8, 7, 8, 9, 4, 9, 2, 1],
//   [9, 8, 5, 6, 7, 8, 9, 8, 9, 2],
//   [8, 7, 6, 7, 8, 9, 6, 7, 8, 9],
//   [9, 8, 9, 9, 9, 6, 5, 6, 7, 8]
// ];


let sum = 0;
for (let y = 0; y < numbers.length; y++) {
  for (let x = 0; x < numbers[0].length; x++) {
    const up = y - 1 < 0 ? 10 : numbers[y - 1][x];
    const down = y + 1 >= numbers.length ? 10 : numbers[y + 1][x];
    const right = x + 1 >= numbers[0].length ? 10 : numbers[y][x + 1];
    const left = x - 1 < 0 ? 10 : numbers[y][x - 1];
    const current = numbers[y][x];
    if (current < up && current < right && current < down && current < left) {
      sum += current + 1;
    }
  }
}

console.log(sum);






