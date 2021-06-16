function solution(numbers) {
  let arr = [];
  for (let i=0; i<numbers.length-1; i++) {
    for (let j=i+1; j<numbers.length; j++) {
      arr.push(numbers[i] + numbers[j])
    }
  }
  return [...new Set(arr)].sort((a, b) => a-b);
}

console.log(solution([2,1,3,4,1]))
// result [2,3,4,5,6,7]