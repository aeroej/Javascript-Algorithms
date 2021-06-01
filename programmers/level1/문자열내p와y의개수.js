/*
function solution(s) {
    let cntP = 0;
    let cntY = 0;
    s.split('').map(v => {
        if (v.toUpperCase() === 'Y') cntY++;
        else if (v.toUpperCase() === 'P') cntP++;
    })
    return cntP === cntY ? true : false;
}
*/

// 기똥차다 !!!
function solution(s) {
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

console.log(solution("pPoooyY"))
