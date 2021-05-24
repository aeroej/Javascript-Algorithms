// 1, 2, 3 3개의 공을 2번 뽑아서 나오는 모든 경우의 수
// 모든 경우를 나열하고, 총 경우의 수를 출력
// DFS(횟수v) --> DFS(v+1)

// function solution(n, m){
//     let cnt = 0;
//     function DFS(v, arr) {
//         if (v > m) return ;
//         else {
//             for (let i=1; i<=n; i++) {
//                 let set = arr.slice();
//                 set.push(i);
//                 DFS(v+1, set);
//                 if (set.length === m) {
//                     console.log(set.join(' '));
//                     cnt++;
//                 }
//             }
//         }
//     }
//     DFS(1, []);
//     return cnt;
// }

// console.log(solution(3, 3));


// DFS() 매개변수로 array를 보내지 않기
// DFS(v)
// 하나의 경우의 수를 tmp에 저장 --> tmp를 answer에 저장
function solution(n, m){
    let cnt = 0;
    let tmp=Array.from({length:m}, ()=>0);
    function DFS(L){
        if(L===m){
            cnt++;
            console.log(tmp.join(' '));
        }
        else{
            for(let i=1; i<=n; i++){
                tmp[L]=i;
                DFS(L+1);
            }
        }   
    }
    DFS(0);
    return cnt;
}

console.log(solution(3, 3));