// queue를 생성한다. queue.push(), queue.shift()
// while을 사용한다.
// v 다음에 v*2 or v*2+1
// 하지만 1, 2, 3, 4, 5, 6, 7 순으로 출력 ㄱㄱ

// 1. 큐를 만든다. 2. queue.push() 를 한다. 3. while(arr.length>0) 4. v = arr.shift() 5. 특정조건 arr.push()
// 1. queue 2. queue.push 3. shile(queue.length>0) 4. v = queue.shift 5. queue.push()
// 1. queue 2. queue.push(); 3. while(queue.length>0) 4. v = queue.shift(); 5. queue.push()
function solution(){  
  let result = '';
  let queue = [];
  queue.push(1);
  while(queue.length>0) {
    v = queue.shift();
    result += String(v) + ' ';
    if (v*2+1 <= 7) {
      queue.push(v*2);
      queue.push(v*2+1);
    }
  }
  return result.trim();
}

console.log(solution());