/*
sort 개념정리하기
str.localeCompare(str)
str.이 기준일 것 같지만 (str)이 기준이다.
'a'  'a'  --> 같으면 0
'a'  'c'  --> -1 -2 --> 'a'.localeCompare('c') 'c'기준 'a'는 마이너스 방향
'c'  'a'  --> 2 1   --> 'c'.localeCompare('a') 'a'기준 'c'는 플러스 방향
*/

function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else {
      if (b>a) return -1;
      else return 1;
    }
  });
  return strings;
}

console.log(solution(["xcce", "zbcd", "cdx"]	, 2))