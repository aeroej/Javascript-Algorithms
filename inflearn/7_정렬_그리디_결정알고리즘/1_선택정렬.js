// arr를 훑어보고 가장 작은 값Math.min을 뽑아서 result arr에 추가

// *** arr.splice(index, 몇개제거할건지) ***
function solution(arr){
    let result = Array.from({length:arr.length}, (v, i) => Number.MAX_SAFE_INTEGER);
    for (let i=0; i<result.length; i++) {
        let index = -1;
        for (let j=0; j<arr.length; j++) {
            if (arr[j] < result[i]) {
                result[i] = arr[j];
                index = j;
            }
        }  
        arr.splice(index, 1);
    }
    return result;
}

let arr=[13, 5, 11, 7, 23, 15];
console.log(solution(arr));