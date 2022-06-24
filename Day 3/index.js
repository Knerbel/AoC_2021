const input = require('./input.json');

let bits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
input.forEach(code => {
  for (let i = 0; i < code.length; i++) {
    if (code[i] === '1') {
      bits[i]++;
    } else {
      bits[i]--;
    }
  }
});

const gamma = parseInt(bits.map((a) => a > 0 ? a = '1' : a = '0').join(''), 2);
const epsilon = parseInt(bits.map((a) => a < 0 ? a = '1' : a = '0').join(''), 2);
const powerConsumption = gamma * epsilon;
console.log(powerConsumption);

