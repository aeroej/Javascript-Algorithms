function solution(target, arr){
    arr.sort((a, b) => a-b);
    let key = Math.floor(arr.length/2);
    for (let i=key/2; i>=0; i/2) {
        if (arr[key] === target) return key+1;
        else if (arr[key] > target) key -= i
        else key += i
    }
}

let arr=[23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(32, arr));