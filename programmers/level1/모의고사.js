function solution(answers) {
  let arr1 = [1, 2, 3, 4, 5], arr2 = [2, 1, 2, 3, 2, 4, 2, 5], arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let i=0, j=0, k=0;
  let cnt = [0, 0, 0];

  answers.forEach(x => {
    if (x === arr1[i]) cnt[0]++;
    if (x === arr2[j]) cnt[1]++;
    if (x === arr3[k]) cnt[2]++;

    i = i+1 === arr1.length ? 0 : ++i;
    j = j+1 === arr2.length ? 0 : ++j;
    k = k+1 === arr3.length ? 0 : ++k;
  })

  let max = Math.max(...cnt);
  return [1, 2, 3].filter((v, i) => {
    if (cnt[i] === max) return v;
  })
}

console.log(solution([1,2,3,4,5]))
console.log(solution([1,3,2,4,2]))
console.log(solution([3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 8]))