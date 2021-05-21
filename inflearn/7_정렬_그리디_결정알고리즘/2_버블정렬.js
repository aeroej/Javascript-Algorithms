// i와 i+1번째 원소를 비교하여 교환, 마지막 원소가 정렬됨
// i는 arr.length-1부터 시작하여 i--
// j는 0부터 시작하여 i까지
function solution(arr){
    for (let i=arr.length-1; i>1; i--) {
        for (let j=0; j<i; j++) {
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
            }
        }
    }
    return arr;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));