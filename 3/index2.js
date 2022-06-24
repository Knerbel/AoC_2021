let inputA = require('./input.json');
let inputB = require('./input.json');

let bits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];


for (let i = 0; i < bits.length; i++) {
  let bits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  inputA.forEach(code => {
    if (code[i] === '1') {
      bits[i]++;
    } else {
      bits[i]--;
    }
  });
  const ogr = bits.map((a) => a >= 0 ? 1 : 0);
  inputA = inputA.filter(number => number[i] == ogr[i]);
  if (inputA.length === 1)
    break;

}

for (let i = 0; i < bits.length; i++) {
  let bits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  inputB.forEach(code => {
    if (code[i] === '1') {
      bits[i]++;
    } else {
      bits[i]--;
    }
  });

  const csr = bits.map((a) => a >= 0 ? 0 : 1);
  inputB = inputB.filter(number => number[i] == csr[i]);
  if (inputB.length === 1)
    break;
}

const a = parseInt(inputA[0], 2).toString(10);
const b = parseInt(inputB[0], 2).toString(10);

console.log(a);
console.log(b);
console.log(a * b);
