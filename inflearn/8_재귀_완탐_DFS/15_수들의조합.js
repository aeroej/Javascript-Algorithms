/*
수들의 조합
N개의 정수가 주어지면 그 숫자들 중 K개를 뽑는 조합의 합이 임의의 정수 M의 배수인 개수
는 몇 개가 있는지 출력하는 프로그램을 작성하세요.
예를 들면 5개의 숫자 2 4 5 8 12가 주어지고, 3개를 뽑은 조합의 합이 6의 배수인 조합을
찾으면 4+8+12 2+4+12로 2가지가 있습니다.
▣ 입력설명
첫줄에 정수의 개수 N(3<=N<=20)과 임의의 정수 K(2<=K<=N)가 주어지고,
두 번째 줄에는 N개의 정수가 주어진다.
세 번째 줄에 M이 주어집니다.
▣ 출력설명
총 가지수를 출력합니다.
▣ 입력예제 1
5 3
2 4 5 8 12
6
▣ 출력예제 1
2
*/

/*
// 일단 그냥 옛날방식으로 풀었음. (4_부분집합)넣을까 말까의 모든 경우를 구해서 배열길이가 3이면 리턴함,,,
function solution(n, k, arr, m){ 
  let cnt = 0;
  function DFS(v, tmp) {
    if (v === n) {
      if (tmp.length === k) {
        let sum = tmp.reduce((a, b) => a+b, 0);
        if (sum%6 === 0) cnt++;
      }
      return ;
    }
    else {
      let set = tmp.slice();
      set.push(arr[v]);
      DFS(v+1, set); // arr[v] 넣는다
      set.pop(); // arr[v] 안넣는다
      DFS(v+1, set);
    }
  }
  DFS(0, []); // 인덱스
  return cnt;
}

// 4+8+12 2+4+12
let arr=[2, 4, 5, 8, 12]; 
console.log(solution(5, 3, arr, 6));
*/

// 배열 매개변수 없이 다시 풀어보기
function solution(n, k, arr, m) {
  let cnt = 0;
  let tmp = 
}


let arr = [2, 4, 5, 8, 12];
console.log(solution(5, 3, arr, 6));