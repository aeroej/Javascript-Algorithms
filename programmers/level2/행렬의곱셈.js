function solution(arr1, arr2) {
  let res = arr1.map(arr => {
    let result = [];
    for (let j = 0; j < arr.length; j++) {
      result.push(arr.reduce((a, b, i) => a + b * arr2[i][j], 0))
    }
    return result;
  })
  return res;
}

console.log(solution([[2, 3, 2], [4, 2, 4], [3, 1, 4]], [[5, 4, 3], [2, 4, 1], [3, 1, 1]]))