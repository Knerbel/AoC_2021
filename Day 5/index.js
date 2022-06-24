const fs = require('fs');
const lines = fs.readFileSync('./input.txt', { encoding: 'utf8' });

const map = [];
for (let y = 0; y != 1000; y++) {
  map.push([])
  for (let x = 0; x != 1000; x++)
    map[y].push(0);
}

for (let line of lines.split('\n')) {
  const x1 = line.split(' -> ')[0].split(',')[0];
  const y1 = line.split(' -> ')[0].split(',')[1];
  const x2 = line.split(' -> ')[1].split(',')[0];
  const y2 = line.split(' -> ')[1].split(',')[1];


  if (+x1 === +x2)
    for (let i = Math.min(+y1, +y2); i <= Math.max(+y1, +y2); i++)
      map[i][+x1]++;

  if (+y1 === +y2)
    for (let i = Math.min(+x1, +x2); i <= Math.max(+x1, +x2); i++)
      map[+y1][i]++;

}

let least2Lines = 0;
for (let y = 0; y != 1000; y++)
  for (let x = 0; x != 1000; x++)
    if (map[y][x] >= 2)
      least2Lines++;

console.log(least2Lines);

