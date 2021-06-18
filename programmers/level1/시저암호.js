function solution(s, n) {
  return s.split('').map(v => {
    let num = v.charCodeAt()
    if (num === 32) return v;  // 공백
    else if (num >= 65 && num <= 90) {  // 대문자
      return num+n <= 90 ? String.fromCharCode(num+n) : String.fromCharCode(num+n-26)
    }
    else {  // 소문자
      return num+n <= 122 ? String.fromCharCode(num+n) : String.fromCharCode(num+n-26)
    }
  }).join('');
}

console.log(solution("z",	1))  // "e F d"