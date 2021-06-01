/*
function solution(s, n) {
    for (let i=0; i<s.length; i++) {
        let ascii = s.charCodeAt(i);
        if (ascii >= 65 && ascii <= 90) {
            if (ascii+n > 90) s[i] = String.fromCharCode(ascii+n-26);
            else s[i] = String.fromCharCode(ascii+n);
            console.log(String.fromCharCode(ascii + n))
            console.log(s)
        }
        else {
            if (ascii + n > 122) s[i] = String.fromCharCode(ascii + n - 26);
            else s[i] = String.fromCharCode(ascii + n);
        }
    }
    return s;
}
*/

function solution(s, n) {
    s.pop()
}

console.log(solution("AB", 3));

