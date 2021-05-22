function solution(target, arr){
    arr.sort((a, b) => a-b);
    let key = Math.floor(arr.length/2);
    for (let i=key/2; i>=0; i=Math.floor(i/2)) {
        if (arr[key] === target) return key+1;
        else if (arr[key] > target) key -= i
        else key += i
        console.log(i, key, arr[key])
    }
}

// 12, 19, 23, 32, 57, 65, 81, 87, 99
let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));