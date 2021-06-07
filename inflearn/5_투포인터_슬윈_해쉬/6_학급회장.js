// key가 후보이고, value가 득표수인 Object --> obj

function solution(s) {
    let result = '';
    let max = Number.MIN_SAFE_INTEGER;
    let obj = {};

    let arr = s.split('');
    for (let x of arr) {
        if (obj[x] === undefined) obj[x] = 1
        else {
            obj[x]++;
            if (obj[x] > max) {
                max = obj[x]
                result = x
            }
        }
    }
    return result;
}

let str="BACBACCACCBDEDE";
console.log(solution(str));