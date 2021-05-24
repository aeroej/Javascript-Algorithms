// 처음에 푼 게 맞았는데,
// arr.slice()를 안해준 것이 문제였다.
// Javascript에서 배열 깊은 복사는 필수닷 
//출력순서 맞췄다 !!!!!!
/*
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
*/


// DFS에 배열을 보내지 않기
// DFS(1이 있다) --> console.log --> DFS(1이 없다)
// 1이 있다부터 시작하므로 초기값은 DFS(1)로 시작한다.
// return 조건은 n을 넘어가는 순간이다.
function solution(n) {
    let result = [];
    function DFS(v) {
        if (v > n) {
            if (result.length !== 0) console.log(result.join(' '));
            return ;
        }
        else {
            result.push(v);
            DFS(v+1);
            result.pop();
            DFS(v+1);
        }
    }
    DFS(1);
}

solution(3);


/*
1. 매개변수 DFS(초기값)
2. return 조건
3. 출력은 if에서
*/