// 삽입정렬
// key값은 항상 j에 들어가야하는데 그렇지 않은 경우를 찾으면 된다.
// i=1; i<arr.length; i++
// j=i; i>0; j-- 
// arr[i]가 key값이 됨
// arr[j-1] > arr[j] --> 좌우바뀜

// arr VS 정렬한 arr

function solution(arr){
    let stack = [];
    let stack2 = [];
    for (let i=1; i<arr.length; i++) {
        let key = arr[i];
        for (let j=i; j>0; j--) {
            if (arr[j-2] > arr[j]) {
                stack2.push(j+1);
            }
            if (arr[j-1] > key) stack.push(j);
            if (arr[j-1] > arr[j]) {
                [arr[j-1], arr[j]] = [arr[j], arr[j-1]]
            }
            
        }
    }
    return [stack.shift(), stack2.shift()].join(' ')
}

// let arr=[120, 125, 152, 130, 135, 135, 143, 127, 160];
let arr=[120, 130, 150, 150, 130, 150];
console.log(solution(arr));