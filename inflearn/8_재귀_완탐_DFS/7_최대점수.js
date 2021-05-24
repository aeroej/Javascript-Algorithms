// 10 + 25 + 6 --> 41, 딱 20분
// 제한시간 안에 최대한 많은 문제를 풀자 !!
// DFS(index, 인덱스배열) --> ps[index]의 합, pt[index]의 합을 일괄 더한다.
// for (let x of 인덱스배열) sumPs += ps[x], sumPt += pt[x]
// ps.length를 초과하는 순간 return
function solution(m, ps, pt) { 
    let maxPs = Number.MIN_SAFE_INTEGER;
    function DFS(v, arr) {
        if (v > ps.length) return;
        else {
            let set = arr.slice();
            let sumPs = 0, sumPt = 0;
            for (let x of set) {
                sumPs += ps[x];
                sumPt += pt[x];
            }
            if (sumPs > maxPs && sumPt <= m) maxPs = sumPs;
            DFS(v+1, set);
            set.push(v); // set은 인덱스배열
            DFS(v+1, set);
        }
    }
    DFS(0, [])
    return maxPs;
}

let ps=[10, 25, 15, 6, 7]; // 문제
let pt=[5, 12, 8, 3, 4]; // 시간
console.log(solution(20, ps, pt));


// DFS() 매개변수로 array를 보내지 않기
// DFS(index, sum, time)