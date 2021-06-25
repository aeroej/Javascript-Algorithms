function solution(str) {
  let res = '';
  let max = Number.MIN_SAFE_INTEGER;

  let hash = new Map();
  for (let x of str) {
    hash.set(x, (hash.get(x) || 0) + 1);
  }

  for (let [key, val] of hash) {
    if (val > max) [res, max] = [key, val];
  }

  return res;
}

console.log(solution('BACBACCACCBDEDE'))