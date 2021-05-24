// 처음에 푼 게 맞았는데,
// arr.slice()를 안해준 것이 문제였다.
// Javascript에서 배열 깊은 복사는 필수닷 
// 모든 부분집합을 출력하는 데에는 성공했으나, 출력예제와 같은 순서로 출력하지 못했다. 

// function solution(n){
//     function DFS(n, arr) {
//         if (n <= 0) return ;
//         else {
//             let set = arr.slice()
//             DFS(n-1, set)
//             set.unshift(n);
//             DFS(n-1, set)
//             console.log(set);
//         }
//     }

//     DFS(3, []);
//     return "solution";
// }

// console.log(solution(3));


// 출력순서도 맞췄다 !!!!!!
function solution(n){
    function DFS(v, arr) {
        if (v > n) return ;
        else {
            let set1 = arr.slice(); // v가 있는 부분집합
            let set2 = arr.slice(); // v가 없는 부분집합
            set1.push(v);
            DFS(v+1, set1);
            console.log(set1.join(' '));
            DFS(v+1, set2);
        }
    }
    DFS(1, []);
}

solution(3);