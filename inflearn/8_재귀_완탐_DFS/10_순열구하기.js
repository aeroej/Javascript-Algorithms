// 순열 구하기
// 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합
// 니다.
// ▣ 입력설명
// 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
// 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.
// ▣ 출력설명
// 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
// 출력순서는 사전순으로 오름차순으로 출력합니다.
// ▣ 입력예제 1
// 3 2 
// 3 6 9 --> 2번 뽑는 모든 경우의 수를 출력
// ▣ 출력예제 1
// 3 6
// 3 9
// 6 3
// 6 9
// 9 3
// 9 6
// 6

function solution(m, arr){   
    let result = [];
    let cnt = 0;
    function DFS(v) {
        if (result.length === m) { // v > m 가능 --> v가 1일 때 첫번째로 고르고, v가 2일 때 두번째로 고르고, v가 2를 초과했을 때 출력
            cnt++;
            console.log(result.join(' '));
            return;
        }
        else {
            for (let i=0; i<arr.length; i++) {
                if (!result.includes(arr[i])) {
                    result.push(arr[i]);
                    DFS(v+1);
                    result.pop();
                }
            }
        }
    }
    DFS(1); // 인덱스x, 뽑는 횟수 m
    return cnt;
}

// 3 6, 3 9, 6 3, 6 9, ... --> 자기자신 중복 ㄴㄴ
let arr=[3, 6, 9]; 
console.log(solution(2, arr));