// 하나하나 할인받았다고 가정할 것 *모든 경우의 수*
// arr.sort((a, b) => a - b) 오름차순 정렬
// arr.sort((a, b) => b - a) 내림차순 정렬

function solution(m, product){
    let answer = 0;
    product = product.sort((a, b) => (a[0]+a[1]) - (b[0]+b[1]));
    for (let i=0; i<product.length; i++) {
        cost = product[i][0]/2 + product[i][1]; // 할인
        let cnt = 1;
        for (let j=0; j<product.length; j++) {
            if (j === i) continue;
            cost = cost + product[j][0] + product[j][1];
            if (cost > m) {
                answer = Math.max(answer, cnt)
            }
            cnt++;
        }
    }
    return answer;
}

let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));