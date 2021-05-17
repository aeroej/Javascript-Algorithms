// 3장의 카드를 뽑아 array에 저장 (모든 경우의 수)
// 내림차순 정렬
// k번째 즉, 인덱스 k-1의 값을 리턴

function solution (n, k, card) {
    let arr = [];
    for (let i=0; i<n; i++) {
        for (let j=i+1; j<n; j++) {
            for (let k=j+1; k<n; k++) {
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

// Set : 중복없는 배열
// let mySet = new Set();
// mySet.add();

// Set을 Array로 변환
// let arr = Array.from(mySet)
// let arr = Array.from(mySet).sort((a, b) => b-a)