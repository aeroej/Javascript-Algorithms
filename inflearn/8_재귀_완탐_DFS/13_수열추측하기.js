/*
가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 그리고 둘째 줄부터 차례대로 파스칼
의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 예를 들어 N이 4 이고 가장 윗 줄에 3
1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.
3 1 2 4
4 3 6
7 9
16
N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하
시오. 단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.
▣ 입력설명
첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. N은 가장 윗줄에 있는 숫자의 개수를 의
미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.
▣ 출력설명
첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 답이 존재
하지 않는 경우는 입력으로 주어지지 않는다.
▣ 입력예제 1
4 16
▣ 출력예제 1
3 1 2 4
*/

// 모든 경우의 수열을 구한다 --> 파스칼 계산을 한다



function solution(n, f){    
  let result = [], flag = false;
  let array = [];
  function pascal(set) {
    // 첫번째와 두번째 원소를 더하여 배열에 넣기 --> i<arr.length-1, arr[i]+arr[i+1]
    // 위의 과정을 arr.length가 1이 될 때까지 반복
    // 최종값을 return
    let arr = set.slice(); // 깊은복사
    while(true) {
      let n = arr.length;
      if (n === 1) {
        if (arr[0] === f) {
          result = set.slice();
          flag = true;
          return;
        }
        break;
      }
      for (let i=0; i<n-1; i++) {
        let element = arr[i] + arr[i+1];
        arr.push(element);
      }
      for (let i=0; i<n; i++) {
        arr.shift();
      }
    }
  }
  function DFS(v) {
    if (flag === true) return;
    if (v > n) {
      pascal(array);
      return;
    }
    else {
      for (let i=1; i<=n; i++) {
        if (!array.includes(i)) {
          array.push(i);
          DFS(v+1);
          array.pop();
        }
      }
    }
  }
  DFS(1);
  return result.join(' ');
}

console.log(solution(4, 16));