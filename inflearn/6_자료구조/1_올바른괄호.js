function solution(s){
    let cnt = 0;
    for (let x of a) {
        if (x === '(') cnt++;
        else cnt--;
    }
    if (cnt === 0) return "YES";
    else return "NO";
}

let a="(())";
console.log(solution(a));