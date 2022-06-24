const fs = require('fs');

let input = fs.readFileSync('./input.txt', { encoding: 'utf8' });
// let numbers = [
//   [1, 1, 1, 1, 1],
//   [1, 9, 9, 9, 1],
//   [1, 9, 1, 9, 1],
//   [1, 9, 9, 9, 1],
//   [1, 1, 1, 1, 1]
// ]
// let numbers = [
//   [5, 4, 8, 3, 1, 4, 3, 2, 2, 3],
//   [2, 7, 4, 5, 8, 5, 4, 7, 1, 1],
//   [5, 2, 6, 4, 5, 5, 6, 1, 7, 3],
//   [6, 1, 4, 1, 3, 3, 6, 1, 4, 6],
//   [6, 3, 5, 7, 3, 8, 5, 4, 7, 8],
//   [4, 1, 6, 7, 5, 2, 4, 6, 4, 5],
//   [2, 1, 7, 6, 8, 4, 1, 7, 2, 1],
//   [6, 8, 8, 2, 8, 8, 1, 1, 3, 4],
//   [4, 8, 4, 6, 8, 4, 8, 5, 5, 4],
//   [5, 2, 8, 3, 7, 5, 1, 5, 2, 6]
// ];

let numbers = []
for (let line of input.split('\n')) {
  line = line.replace('\r', '')
  const row = [];
  for (let i = 0; i < line.length; i++) {
    row.push(+line.charAt(i));
  }
  numbers.push(row);
}



let flashes = 0;
for (let step = 0; step < 100000000; step++) {

  for (let y = 0; y < numbers.length; y++) {  // inital increase
    for (let x = 0; x < numbers[y].length; x++) {
      numbers[y][x]++;
    }
  }


  for (let i = 0; i != 9; i++) {
    for (let y = 0; y < numbers.length; y++) {  // flashing
      for (let x = 0; x < numbers[y].length; x++) {
        if (numbers[y][x] > 9) {
          if (y - 1 >= 0 && numbers[y - 1][x] !== 0) numbers[y - 1][x]++;
          if (y + 1 < 10 && numbers[y + 1][x] !== 0) numbers[y + 1][x]++;
          if (x - 1 >= 0 && numbers[y][x - 1] !== 0) numbers[y][x - 1]++;
          if (x + 1 < 10 && numbers[y][x + 1] !== 0) numbers[y][x + 1]++;


          if (y - 1 >= 0 && x - 1 >= 0 && numbers[y - 1][x - 1] !== 0) numbers[y - 1][x - 1]++;
          if (y - 1 >= 0 && x + 1 < 10 && numbers[y - 1][x + 1] !== 0) numbers[y - 1][x + 1]++;
          if (y + 1 < 10 && x - 1 >= 0 && numbers[y + 1][x - 1] !== 0) numbers[y + 1][x - 1]++;
          if (y + 1 < 10 && x + 1 < 10 && numbers[y + 1][x + 1] !== 0) numbers[y + 1][x + 1]++;
          numbers[y][x] = 0;
          flashes++;
        }
      }
    }
  }

  let gotIt = true;
  for (let y = 0; y < numbers.length; y++) {
    for (let x = 0; x < numbers[y].length; x++) {
      if (numbers[y][x] !== 0) {
        gotIt = false;
      }
    }
  }
  if (gotIt) {
    console.log(`${step + 1}. step GOT ITTTTT`);
    break;;
  }
  // console.log(`${step + 1}. step`);
  // for (const line of numbers)
  //   console.log(line.join(''));
  // console.log(flashes);
}
for (const line of numbers)
  console.log(line.join(''));
