/*
문자열과 숫자열의 사칙연산은 숫자가 나오게 됨
사칙연산 되면서 문자가 자동으로 파싱
함수명 --> strToInt() 
}
*/
function strToInt(s) {
    // return Number(s);
    // return parseInt(s);
    return s/1;
    // return +s;
}
console.log(strToInt("-1234"))