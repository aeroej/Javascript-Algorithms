// function solution(target, arr){
//     arr.sort((a, b) => a-b);
//     let key = Math.floor(arr.length/2);
//     for (let i=key/2; i>=0; i=Math.floor(i/2)) {
//         if (arr[key] === target) return key+1;
//         else if (arr[key] > target) key -= i
//         else key += i
//         console.log(i, key, arr[key])
//     }
// }

function solution(target, arr) {
    arr.sort((a, b) => a-b);
    let lt = 0, rt = arr.length-1;
    while(true) {
        let mid = Math.floor((lt+rt)/2);
        if (arr[mid] === target) return mid+1;
        else if (arr[mid] > target) rt = mid;
        else lt = mid;
    }
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81, 19, 99];
console.log(solution(32, arr));