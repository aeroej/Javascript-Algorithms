function solution(n, lost, reserve) {
  let ls = new Set(lost);
  let rs = new Set(reserve);
  for (let x of ls) {
    if (rs.has(x)) {
      ls.delete(x)
      rs.delete(x)
    }
  }
  for (let x of ls) {
    if (rs.has(x-1)) {
      ls.delete(x)
      rs.delete(x-1)
      continue;
    }
    else if (rs.has(x+1)) {
      ls.delete(x) 
      rs.delete(x+1)
      continue;
    }
  }
  return n - ls.size;
}

console.log(solution( 5, [2, 3, 4], [3, 4, 5])) // 예외
console.log(solution( 5, [2, 4], [1, 3, 5])) // 5
console.log(solution(3,	[3],	[1])) // 2
console.log(solution(5,	[2, 4],	[3])) // 4


