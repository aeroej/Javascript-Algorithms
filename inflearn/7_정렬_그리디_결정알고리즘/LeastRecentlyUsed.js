function solution(arr, size) {
    let queue = [];
    
    for (let x of arr) {
        let task = queue.indexOf(x);
        if (task !== -1) queue.splice(task, 1);

        queue.unshift(x);
        if (queue.length > size) queue.pop();
    }

    return queue;
}

console.log(solution([1, 2, 3, 2, 6, 2, 3, 5, 7], 5))