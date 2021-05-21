// 선택정렬 : 최소값을 찾는다, 맨 앞에 위치한 값과 교체한다
// 새로운 array를 정의하지 않는다. 
// 교체 --> 인덱스 교체만 하면 될듯
// i와 j,,, 교환에 필요한 변수 tmp
// i를 두고, j=i+1에서부터 시작, arr[i]보다 작은 arr[j]값을 발견하면 교환

// *** arr.splice(index, 몇개제거할건지) ***
// 변수 동시할당 [x, y] = ['a', 'b']
function solution(arr) {
    for (let i=0; i<arr.length; i++) {
        for (let j=i+1; j<arr.length; j++) {
            if (arr[i] > arr[j]) {
                let tmp = arr[i];        
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));