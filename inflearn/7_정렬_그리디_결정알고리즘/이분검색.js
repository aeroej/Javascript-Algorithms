function solution(arr, target) {
    arr.sort((a, b) => a - b);
    
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);

        if (arr[mid] === target) return mid+1;
        else if (arr[mid] < target) left = mid+1;
        else if (arr[mid] > target) right = mid-1;
    }
}

let arr = [23, 87, 65, 12, 57, 32, 99, 81];
console.log(solution(arr, 32));