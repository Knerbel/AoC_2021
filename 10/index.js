const fs = require('fs');

let x = fs.readFileSync('./input.txt', { encoding: 'utf8' });
let input = [];
for (let line of x.split('\n')) {
  input.push(line.replace('\r', ''));
}
console.log(input);
// let input = [
//   "[({(<(())[]>[[{[]{<()<>>",
//   "[(()[<>])]({[<{<<[]>>(",
//   "{([(<{}[<>[]}>{[]{[(<()>",
//   "(((({<>}<{<{<>}{[]{[]{}",
//   "[[<[([]))<([[{}[[()]]]",
//   "[{[{({}]{}}([{[{{{}}([]",
//   "{<[[]]>}<{[{[{[]{()[[[]",
//   "[<(<(<(<{}))><([]([]()",
//   "<{([([[(<>()){}]>(<<{{",
//   "<{([{{}}[<[[[<>{}]]]>[]]"
// ]

//*   <  {  (  [  (  [  [  (  <  >  (  )  )  {  }  ]  >  (  <  <  {  {
//*   0  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20  21

const openingCharacters = ['(', '[', '{', '<'];
const closingCharacters = [')', ']', '}', '>'];

const openClosedMap = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>'
}
const charPointMap = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137
}
let points = 0;
for (let line of input) {
  let chars = [];

  for (let i = 0; i < line.length; i++) {
    if (openingCharacters.includes(line.charAt(i))) { // Opening char
      chars.push(line.charAt(i));
    }
    if (closingCharacters.includes(line.charAt(i))) { // Closing char
      const last = chars.pop();
      const negation = openClosedMap[last];
      if (negation !== line.charAt(i)) {
        console.log(`${line} Expected ${negation}, but found ${line.charAt(i)} instead.`)
        points += charPointMap[line.charAt(i)];
      }
    }
  }
}
console.log(points);