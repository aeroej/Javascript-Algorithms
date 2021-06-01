function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    return (s+'').split('').map(v => isNaN(v) ? false : v).includes(false) ? false : true;
    // return isNaN(s) ? false : true; --> 지수형식("1e22")을 넣었을 경우 문제
}

console.log(solution("12s4"));