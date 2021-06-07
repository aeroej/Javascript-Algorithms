// 투포인터 + 슬윈 --> lt++, rt++ 둘이 동시에 증가해야함
// let sh = new Map(); --> s의 부분문자열 아나그램 생성
// sh.set(s[lt], sh.get(s[lt])-1) lt++
// sh.set(s[rt], sh.get(s[rt])+1) rt++

// t의 아나그램 생성

// compareMaps --> sh와 t의 아나그램 비교 --> true일 경우 cnt++

function compareMaps(map1, map2){
    for (let [key, val] of map1) {
        if (val !== map2.get(key)) return false;
    }
    console.log(map1.size, map2.size)
    return true;
}

function solution(s, t){
    let cnt = 0;
    let sh1 = new Map();
    let sh2 = new Map();
    let lt = 0, rt = 0; 

    for (let x of t) {
        if (sh1.has(x)) sh1.set(x, sh1.get(x)+1);
        else sh1.set(x, 1);
        if (sh2.has(s[rt])) sh2.set(s[rt], sh2.get(s[rt++])+1); // a="bac"까지 sh2 정의
        else sh2.set(s[rt++], 1);
    }
    
    if (compareMaps(sh1, sh2)) cnt++; // a="bac"와 b="abc" 비교

    while (lt<s.length && rt<s.length) {
        sh2.set(s[lt], sh2.get(s[lt++])-1); // lt
        if (sh2.has(s[rt])) sh2.set(s[rt], sh2.get(s[rt++])+1); // rt
        else sh2.set(s[rt++], 1);
        if (compareMaps(sh1, sh2)) cnt++; // compareMaps
    }
    return cnt;
}

let a="bacaAacba";
let b="abc";
console.log(solution(a, b));