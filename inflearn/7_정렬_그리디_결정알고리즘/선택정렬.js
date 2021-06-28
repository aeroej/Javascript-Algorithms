function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
        let index = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[index]) index = j;
        }

        [arr[i], arr[index]] = [arr[index], arr[i]];
    }

    return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]))