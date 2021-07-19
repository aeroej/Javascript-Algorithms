let fs = require('fs');
let input = fs.readFileSync('../stdin').toString().split('\r\n');
let N = parseInt(input.shift());


function solution(input) {
  let index1 = input.indexOf('KBS1');
  let index2 = input.indexOf('KBS2');
  index2 = index1 > index2 ? ++index2 : index2;

  let result = '';


  for (let i = 0; i < index1; i++) {
    result += '1';
  }


  for (let i = index1; i > 0; i--) {
    result += '4';
  }

  for (let i = 0; i < index2; i++) {
    result += '1';
  }

  for (let i = index2; i > 1; i--) {
    result += '4';
  }

  return result;

}


console.log(solution(input));