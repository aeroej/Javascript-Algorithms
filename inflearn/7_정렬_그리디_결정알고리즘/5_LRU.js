// queue같다. 새로운 작업이 생겼는데 캐시에 없다면, queue.pop()하고 queue.push(새로운작업)
// 새로운 작업이 기존 캐시에 있다면, queue.includes(새로운작업) --> queue.splice(캐시, 1) 하고 queue.push(작업)
// 

function solution(size, arr) {
    let queue = [];
    for (let i = 0; i < arr.length; i++) {
        if (queue.includes(arr[i])) { // 캐시에 있는 경우
            queue.splice(queue.indexOf(arr[i]), 1);
            queue.push(arr[i]);
        }
        else { // 캐시에 없는 경우
            if (queue.length < size) queue.push(arr[i]);
            else { 
                queue.shift();
                queue.push(arr[i]);
            }
        }
    }
    return queue.reverse().join(' ');
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));

// [1, 6, 2, 3, 5]
// [6, 2, 3, 5, 7]
// 역순으로 출력하면 될듯 queue.reverse()
