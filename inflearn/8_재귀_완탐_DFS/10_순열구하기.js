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
    function DFS(v, x) {
        if (result.length === m) {
            // console.log(result);
            return;
        }
        else {
            if (!result.includes(arr[v])) result.push(arr[v]);
            DFS(v+1);
            DFS(v+1)
            console.log(result)
            result.pop();
            result.push(arr[v+1])
        }
    }
    DFS(0); // 추가할 인덱스
    return "solution" ;
}

// 3 6, 3 9, 6 3, 6 9, ... --> 자기자신 중복 ㄴㄴ
let arr=[3, 6, 9]; 
console.log(solution(2, arr));