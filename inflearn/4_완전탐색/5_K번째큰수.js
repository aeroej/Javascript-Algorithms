// 3장의 카드를 뽑아 array에 저장 (모든 경우의 수)
// 내림차순 정렬
// k번째 즉, 인덱스 k-1의 값을 리턴

function solution (n, k, card) {
    let arr = [];
    for (let i=0; i<n; i++) {
        for (let j=0; j<n-1; j++) {
            for (let k=0; k<n-2; k++) {
                if (i === j || j === k || k === i) continue;
                let num = card[i]+card[j]+card[k];
                if (arr.indexOf(num) === -1){
                    arr.push(card[i]+card[j]+card[k]);
                }
            }
        }
    }
    arr = arr.sort((a, b) => b-a);
    return arr[k-1];
}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));