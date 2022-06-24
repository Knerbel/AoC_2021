const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });

let count = 0;
for (const line of input.split('\n')) {
  const fullOutput = line.split(' | ')[1].replace('\r', '');
  const digits = fullOutput.split(' ');
  for (let digit of digits) {
    console.log(digit.length);

    if (digit.length === 2 || digit.length === 4 || digit.length === 3 || digit.length === 7)
      count++;
  }

}

console.log(count);