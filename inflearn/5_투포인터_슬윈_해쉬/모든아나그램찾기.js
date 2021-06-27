function isEquel(hashS, hashT) {
    for (let [key, val] of hashT) {
        if (val !== hashS.get(key)) return false;
    }
    return true;
}

function solution(strS, strT) {
    let cnt = 0;
    let hashS = new Map(), hashT = new Map();

    let len = strT.length;
    for (let i=0; i<len; i++) {
        hashS.set(strS[i], (hashS.get(strS[i]) || 0) + 1);
        hashT.set(strT[i], (hashT.get(strT[i]) || 0) + 1);
    }

    if (isEquel(hashS, hashT)) cnt++;

    for (let i=len; i<strS.length; i++) {
        hashS.set(strS[i], (hashS.get(strS[i]) || 0) + 1);
        hashS.set(strS[i-len], hashS.get(strS[i-len]) - 1);
        if(isEquel(hashS, hashT)) cnt++;
    }
    
    return cnt;
}

console.log(solution('bacaAacba', 'abc'));