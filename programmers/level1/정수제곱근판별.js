function solution(n) {
    let res = Math.sqrt(n);
    return res === parseInt(res) ? (res+1)**2 : -1;
}

console.log(solution(121));
console.log(solution(3));