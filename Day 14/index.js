const fs = require('fs');

let input = fs.readFileSync('./input.txt', { encoding: 'utf8' });

let insertions = {};
for (const insertion of input.split('\n')) {
  insertions[insertion.split(' -> ')[0].replace('\r', '')] = insertion.split(' -> ')[1].replace('\r', '')
}

// insertions = {
//   'CH': "B",
//   "HH": "N",
//   "CB": "H",
//   "NH": "C",
//   "HB": "C",
//   "HC": "B",
//   "HN": "C",
//   "NN": "C",
//   "BH": "H",
//   "NC": "B",
//   "NB": "B",
//   "BN": "B",
//   "BB": "N",
//   "BC": "B",
//   "CC": "N",
//   "CN": "C",
// }
// console.log(insertions);


let template = 'PHOSBSKBBBFSPPPCCCHN';
// let template = 'NNCB';


console.log('Template     ' + template);

for (let i = 0; i < 40; i++) {
  let newTemplate = '';
  for (let j = 0; j < template.length - 1; j++) {
    const part = template.substring(j, j + 2);
    newTemplate += template[j] + insertions[part];
  }
  newTemplate += template[template.length - 1]
  console.log('After step ' + (i + 1) + ' ' + newTemplate.length);
  const letters = {};
  for (const c of template) {
    if (letters[c.toString()])
      letters[c.toString()]++;
    else
      letters[c.toString()] = 1;
  }
  console.log(letters)


  template = newTemplate;
}



// const max = letters.reduce((a, b) => { return Math.max(a, b) });
// console.log(max);