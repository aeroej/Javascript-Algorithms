function solution(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j >= 0; j--) {
            if (arr[j - 1] > arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            else break;
        }
    }
    return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
console.log(solution([11, 7, 5, 6, 10, 9]))