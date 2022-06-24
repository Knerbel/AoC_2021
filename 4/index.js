const fs = require('fs');

const input = require('./input');
const boards = fs.readFileSync('./boards.txt', { encoding: 'utf8' });


const maps = [];

let map =
  [[1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0]];

for (let i = 0; i < boards.split('\n').length; i++) {

  const line = boards.split('\n')[i];

  if (line === '\r') {
    maps.push(map);
    map =
      [[1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]];
  }
  else {
    for (let x = 0; x < 5; x++) {
      map[i % 6][x] = line.split(';')[x].replace('\r', '');
    }
  }
}
maps.push(map);

for (let number of input) {
  for (let map of maps) {
    for (let x = 0; x < 5; x++)
      for (let y = 0; y < 5; y++)
        if (+map[y][x] === +number)
          map[y][x] = 'M' + number;

    if (doesWin(map)) {
      console.log(calculateScore(map) * number);
      return;

    }
  }
};

function doesWin(map) {
  for (let y = 0; y < 5; y++) {
    let winsByRow = true;
    for (let x = 0; x < 5; x++)
      if (!map[y][x].startsWith('M'))
        winsByRow = false;
    if (winsByRow) {
      console.log("WINS BY ROW");
      console.log(map);
      return true;
    }
  }

  for (let x = 0; x < 5; x++) {
    let winsByCollom = true;
    for (let y = 0; y < 5; y++)
      if (!map[y][x].startsWith('M'))
        winsByCollom = false;
    if (winsByCollom) {
      console.log("WINS BY Collom");
      console.log(map);
      return true;
    }
  }
  return false;
}


function calculateScore(map) {
  let sumOfUnmarked = 0;
  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      if (!map[y][x].startsWith('M'))
        sumOfUnmarked += +map[y][x];
    }
  }

  console.log(sumOfUnmarked);
  return sumOfUnmarked;
}
