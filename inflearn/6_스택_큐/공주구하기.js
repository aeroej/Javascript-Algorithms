function solution(n, k) {
    let queue = Array.from({length: n}, (v, i) => i+1);
    let cnt = 0;

    while (queue.length > 1) {
        let num = queue.shift();
        cnt++;

        if (cnt === k) cnt = 0;
        else queue.push(num);
    }

    return queue.shift();
}

console.log(solution(8, 3))
