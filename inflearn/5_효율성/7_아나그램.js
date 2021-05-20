// let sh = new Map();
// sh.set('A', 1);
// sh.get('A');
// sh.has('A');

function solution(str1, str2){
    let sh1 = new Map();
    let sh2 = new Map();
    for (let x of str1) {
        if (sh1.has(x)) sh1.set(x, sh1.get(x)+1)
        else sh1.set(x, 1)
    }
    for (let x of str2) {
        if (sh2.has(x)) sh2.set(x, sh2.get(x)+1)
        else sh2.set(x, 1)
    }
    for (let [key, val] of sh1){
        if (sh2.get(key) !== val) return "NO"
    }
    return "YES"
}

let a="AbaAeCe";
let b="baeeACA";
console.log(solution(a, b));