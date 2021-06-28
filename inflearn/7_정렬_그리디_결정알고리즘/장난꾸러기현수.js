function solution(arr) {
    let res = [];
    let sorted = arr.slice().sort((a, b) => a-b);
    
    sorted.forEach((v, i) => {
        if (v !== arr[i]) res.push(i+1);
    });

    return res.join(' ');
}

console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution([120, 130, 150, 150, 130, 150]));