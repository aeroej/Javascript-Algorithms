function solution(arr1, arr2) {
  return arr1.filter(v => arr2.includes(v)).sort((a, b) => a - b);
}

console.log(solution([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]))