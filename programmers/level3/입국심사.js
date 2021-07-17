function solution(n, times) {
  times.sort((a, b) => a-b);
  let table = times.slice();
  let visited = Array.from({length: times.length}, () => false);
  visited[0] = true;
  let result = 0;
  DFS(n);

  function DFS(n) {
    if (n === 0) return;
    let minIndex = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for (let i=0; i<table.length; i++) {
      if (visited[i-1] === false) break;
      if (table[i] < min) {
        [min, minIndex] = [table[i], i];
        visited[i] = true;
      }
    }
    
    result = table[minIndex];
    table[minIndex] += times[minIndex];

    console.log(table)
    DFS(--n);
  }
  return result;
}

console.log(solution(3, [1, 2, 3]))