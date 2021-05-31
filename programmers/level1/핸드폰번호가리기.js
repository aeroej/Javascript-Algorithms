/*
arr.slice() --> 두번째 매개변수를 안적으면 배열 끝까지 간다
arr.slice(n-4) 말고 arr.slice(-4)만 해줘도 된다

더 나은 코드
let result = '*'.repeat(s.length - 4) + s.slice(-4);
*/
function solution(phone_number) {
  const n = phone_number.length;
  var answer = '*'.repeat(n-4);
  answer += phone_number.slice(n-4); 
  return answer;
}

console.log(solution('01033334444'))