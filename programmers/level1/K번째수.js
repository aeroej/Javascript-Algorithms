function solution(array, commands) {
  let res = [];
  commands.forEach(command => {
    let arr = array.slice(command[0] - 1, command[1]).sort((a, b) => a-b);
    res.push(arr[command[2] - 1])
  })
  return res;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4],	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	))