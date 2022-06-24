const fs = require('fs');

const input = fs.readFileSync('./input.txt', { encoding: 'utf8' });

const crabs = [];
for (const crab of input.split(',')) {
  crabs.push(+crab);
}

const max = crabs.reduce((a, b) => { return Math.max(a, b) });


const fuelConsumptions = [];
for (let x = 0; x <= max; x++) {
  let fuelConsumption = 0;
  for (const crab of crabs) {
    fuelConsumption += kleinerGauß(Math.abs(x - crab));
  }
  fuelConsumptions.push(fuelConsumption);
}


function kleinerGauß(number) {
  return (number * (number + 1)) / 2;
}

const min = fuelConsumptions.reduce((a, b) => { return Math.min(a, b) });
console.log(min);
