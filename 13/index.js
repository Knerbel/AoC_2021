const fs = require('fs');

let input = fs.readFileSync('./paper.txt', { encoding: 'utf8' });

let paper = [];
for (let y = 0; y < 895; y++) {
  let line = '';
  for (let x = 0; x < 1311; x++) {
    line += '.';
  }
  paper.push(line);
}

const xx = [];
const yy = [];

let dots = 0;
for (const line of input.split('\n')) {
  const x = +(line.split(',')[0]);
  const y = +(line.split(',')[1].replace(`\r`, ''));
  // console.log(y);
  xx.push(x)
  yy.push(y)

  let newString = ''

  for (let i = 0; i < 1311; i++) {
    if (i !== x)
      newString += '.';
    else
      newString += '#';
  }
  // if (!paper[y]) {
  //   paper[y] = newString;
  //   console.log(x, y)
  // }
  // else {
  //   dots++;
  // console.log(x)
  // console.log(paper[894])
  paper[y] = paper[y].substring(0, x) + '#' + paper[y].substring(x + 1); //overwriting
  dots++;


  // }
}


console.log(`Dots1: ${dots}`);
dots = 0;


// console.log(paper);
console.log('Lines:' + paper.length);

console.log(xx.reduce((a, b) => { return Math.max(a, b) })) // 1310
console.log(yy.reduce((a, b) => { return Math.max(a, b) })) // 894








// paper = [
//   "...#..#..#.",
//   "....#......",
//   "...........",
//   "#..........",
//   "...#....#.#",
//   "...........",
//   "...........",
//   "...........",
//   "...........",
//   "...........",
//   ".#....#.##.",
//   "....#......",
//   "......#...#",
//   "#..........",
//   "#.#........"
// ]
// paper = [
//   "#.##..#..#.",
//   "#...#......",
//   "......#...#",
//   "#...#......",
//   ".#.#..#.###",
//   "...........",
//   "..........."
// ]
let folds = [
  // "fold along y=7",
  // "fold along x=5"

  // "fold along x=5",
  // "fold along x=655",
  // "fold along y=447",
  // "fold along x=327",
  // "fold along y=223",
  // "fold along x=163",
  // "fold along y=111",
  // "fold along x=81",
  // "fold along y=55",
  // "fold along x=40",
  // "fold along y=27",
  // "fold along y=13",
  // "fold along y=6",

  "fold along x=655",
  "fold along y=447",
  "fold along x=327",
  "fold along y=223",
  "fold along x=163",
  "fold along y=111",
  "fold along x=81",
  "fold along y=55",
  "fold along x=40",
  "fold along y=27",
  "fold along y=13",
  "fold along y=6"
]



for (const fold of folds) {
  const newPaper = [];
  if (fold.includes('x')) {
    for (let y = 0; y < paper.length; y++) {
      const line = paper[y];

      let newLine = '';
      for (let x = 0; x < (line.length) / 2 - 1; x++) {
        if (line[x] === '#' || line[line.length - x - 1] === '#') {
          newLine += '#';
        }
        else {
          newLine += '.'
        }
      }
      newPaper.push(newLine);
    }
  }


  if (fold.includes('y')) {
    for (let y = 0; y < (paper.length - 1) / 2; y++) {
      const aLine = paper[y];
      const bLine = paper[paper.length - 1 - y];

      let newLine = '';
      for (let x = 0; x < paper[0].length; x++) {
        if (aLine[x] === '#' || bLine[x] === '#')
          newLine += '#';
        else
          newLine += ' ';
      }
      newPaper.push(newLine);
    }
  }
  paper = newPaper;
  console.log("fold")
  for (const line of paper) {
    // console.log(line);
  }

}

console.log(paper.length)
console.log(paper[0].length)


for (const line of paper) {
  for (const c of line) {
    // console.log(c);

    if (c === '#')
      dots++;
  }
}
console.log(`Dots2: ${dots}`);

console.log(paper)
