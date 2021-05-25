/*
▣ 입력설명
첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.
▣ 출력설명
첫째 줄에 조합수를 출력합니다.
n!/(n-r)!(r!) --> 5!/2!3! --> 20/2 10
nCr = n-1Cr-1 + n-1Cr --> 4!/2!2! + 4!/1!3! --> 6+4
▣ 입력예제 1
5 3
▣ 출력예제 1
10
▣ 입력예제 2
33 19
▣ 출력예제 2
818809200
*/

/*
5,3 -> 4,2 4,3 -> 3,1 3,2 4,3 -> 3+3+4
r이 1 또는 n-r = 1인 경우 답은 n이 된다.
DFS(v, m) --> DFS(v-1, m-1) + DFS(v-1, m)
*/
function solution(n, r){   
    let result = 0;
    function DFS(v, m) {
        if (m === 1 || v-m === 1) {
            result += v;
            return ;
        }
        else {
            DFS(v-1, m-1);
            DFS(v-1, m);
        }
    }
    DFS(n, r);
    return result;
}

console.log(solution(5, 3));
// console.log(solution(5, 3));