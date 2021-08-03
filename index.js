const fs = require('fs');
const stdin = (process.platform === 'linux'
  ? fs.readFileSync('/dev/stdin').toString()
  : ``
).split('\n');
let [N, M] = stdin[0].split(' ').map(Number);
