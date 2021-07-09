function solution(progresses, speeds) {
  let result = [];
  let queue = [];

  for (let i = 0; i < speeds.length; i++) {
    let task = Math.ceil((100 - progresses[i]) / speeds[i]);
    queue.push(task);

    if (task > queue[0]) {
      result.push(queue.length-1);
      queue = [task];
    }
  }
  result.push(queue.length)
  return result;
}

console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))