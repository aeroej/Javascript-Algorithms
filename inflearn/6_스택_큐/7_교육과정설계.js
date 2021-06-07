function solution(need, plan){
    // let queue = [];
    // for (let x of need) {
    //     queue.push(x);
    // }
    let queue = need.split('');
    for (let x of plan) {
        if (x === queue[0]) queue.shift()
    }
    if (queue.length) return "NO";
    else return "YES"
}

let a="CBA";
let b="CBDAGE";
console.log(solution(a, b));