function solution(str) {
  let n = str.length;
  if (n % 2) return str.substr(Math.floor(n / 2), 1);  // 홀수
  else {
    let mid = Math.floor(n / 2);
    return str.substring(mid - 1, mid + 1);  // 짝수
  }
}

console.log(solution('good'))