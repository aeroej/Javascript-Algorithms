function solution(arr, divisor) {
  let res = arr.map((v, i) => {
    if (v%divisor === 0) return v
  })
  return res.length ? res.sort((a, b) => a-b) : [-1];
}

console.log(solution([5, 9, 7, 10], 5)) // [1, 2, 3, 36]