const fs = require('fs');

let x = fs.readFileSync('./input.txt', { encoding: 'utf8' });
let input = [];
for (let line of x.split('\n')) {
  input.push(line.replace('\r', ''));
}

// input = [
//   "start-A",
//   "start-b",
//   "A-c",
//   "A-b",
//   "b-d",
//   "A-end",
//   "b-end"
// ];

// input = [
//   "dc-end",
//   "HN-start",
//   "start-kj",
//   "dc-start",
//   "dc-HN",
//   "LN-dc",
//   "HN-end",
//   "kj-sa",
//   "kj-HN",
//   "kj-dc",
// ];

let paths = {};
for (const path of input) {
  const a = path.split('-')[0];
  const b = path.split('-')[1];
  if (!paths[a])
    paths[a] = [];
  paths[a].push(b)
  if (!paths[b])
    paths[b] = [];
  paths[b].push(a)
}

let routeCount = 0;

navigate('start', 'start');


function navigate(a, pathString) {
  if (pathString.includes('end')) {
    routeCount++;
    console.log(pathString);
  }

  for (const path of paths[a]) {
    if ((!pathString.includes(path) || path.toLowerCase() !== path) && !pathString.includes('end'))
      navigate(path, pathString + ',' + path);
  }
}

console.log(routeCount);