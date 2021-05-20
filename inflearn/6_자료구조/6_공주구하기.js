function solution(n, k){
    let cnt = 0;
    let queue = [];
    for (let i=1; i<=n; i++) queue.push(i);

    while (queue.length !== 1) {
        cnt++;
        if (cnt === k) {
            queue.shift();
            cnt = 0;
        }
        else queue.push(queue.shift());
    }    
    return queue.shift();
}

console.log(solution(8, 3));