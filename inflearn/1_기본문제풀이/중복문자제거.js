function solution(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    if (i === str.indexOf(str[i])) res += str[i];
  }
  return res;
}

console.log(solution('ksekkset'))