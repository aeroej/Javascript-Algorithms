/*
자바스크립트에서 sort는 문자정렬이다....! ㄷㄷㄷㄷ
*/

function solution(s) {
    // return s.split('').sort((a, b) => b.charCodeAt(0)-a.charCodeAt(0)).join('');
    return s.split('').sort().reverse().join('');
}

console.log(solution("Zbcdefg"));