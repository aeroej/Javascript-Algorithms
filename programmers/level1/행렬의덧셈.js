/*
더 나은 코드
return A.map((a,i) => a.map((b, j) => b + B[i][j]));
*/

function solution(arr1, arr2) {
  var answer = Array.from(Array(arr1.length), (v, i) => Array(arr1[0].length).fill(0).map((w, j) => arr1[i][j] + arr2[i][j]))
  return answer;
}

console.log(solution([[1,2], [2,3]], [[3,4],[5,6]]))