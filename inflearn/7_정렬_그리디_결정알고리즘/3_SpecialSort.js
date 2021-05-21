// 버블정렬
// i는 arr.length-1부터 시작해서 i>1 i++
// j는 0부터 시작하여 j<i, j++
function solution(arr){
    for (let i=arr.length-1; i>1; i--) {
        for (let j=0; j<i; j++) {
            if (arr[j]>0 && arr[j+1]<0) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));