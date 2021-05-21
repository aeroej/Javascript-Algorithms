// 0인덱스는 이미 정렬됐다고 가정
// 1인덱스부터 정렬된 리스트안에 끼워넣는다고 생각
// key가 1인덱스가 되는 것이며, key값에는 key-1인덱스인 값과 비교하여 key-1인덱스가 더 크면 key값에 key-1값을 넣어준다.
// 뒤에서 앞으로 버블정렬하는 기분이로구만!!
// key = arr[i] --> i=1; i<arr.length; i++;
// j=key부터 시작하여 j>=0까지 j--
// arr[j-1]와 key값을 비교하여 arr[j-1]가 더 크면 arr[j] = arr[j-1]
// arr[--j]와 key값을 비교하여 arr[j-1]가 더 작으면 arr[j] = key

function solution(arr){
    for (let i=1; i<arr.length; i++) {
        for (let j=i; j>0; j--) {
            if (arr[j-1] > arr[j]) {
                let tmp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = tmp;
            }
        }
    }
    return arr;
}

let arr=[11, 7, 5, 6, 10, 9];
console.log(solution(arr));