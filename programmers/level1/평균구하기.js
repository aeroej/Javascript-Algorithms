function solution(arr) {
  let sum = arr.reduce((a, b) => a+b, 0);
  return sum/arr.length;
}

console.log(solution([1,2,3,4]))