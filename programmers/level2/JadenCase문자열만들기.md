[![프로그래머스](../프로그래머스표지.png)](https://programmers.co.kr/learn/courses/30/lessons/12951)
# [👩🏻‍💻문제링크](https://programmers.co.kr/learn/courses/30/lessons/12951)

[프로그래머스 12951] JadenCase 문자열 만들기 (Javascript)
문제 설명
JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

제한 조건
s는 길이 1 이상인 문자열입니다.
s는 알파벳과 공백문자(" ")로 이루어져 있습니다.
첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다. ( 첫번째 입출력 예 참고 )
입출력 예
s	return
"3people unFollowed me"	"3people Unfollowed Me"
"for the last week"	"For The Last Week"

<br>

# ✍️Idea Sketch

### **2021-06-24**

##### 1. 문자열 공백 기준으로 split() --> arr 생성
##### 2. 각 arr 원소의 첫번째 글자는 str.toUpperCase()
##### 3. str.toUpperCase() 대문자 변환
```javascript
const sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(sentence.toUpperCase());  // output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```
##### 4. 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 씁니다.
- str.toUpperCase()는 str에 영문이 아닌 문자가 포함된 경우, 그 문자 그대로 리턴함

##### 4. arr.map() 사용
- 아래처럼 작성한 경우, 대문자 전환이 적용되질 않음
```javascript
arr.map(v => {
  v[0] = v[0].toUpperCase();
  return v;
})
```
##### 5. arr.splice() 또는 arr.slice() 사용하여 return
- 문자열 복사가 가능한 arr.slice() 사용
- str.toLowerCase() 사용

##### 6. array.splice(index, 제거할 요소의 개수, 추가할 요소)
- 배열 요소를 삭제/교체/추가 
- 원본이 바뀜
- **배열 대상**
```javascript
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');  // index 1에 'Feb' 추가 (0개 제거)
console.log(months);  // output: ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');  // index 4를 'May'로 대체 (1개 "June" 제거)
console.log(months);  // output: ["Jan", "Feb", "March", "April", "May"]
```

##### 7. array.slice(begin, end)
- 배열 인덱스 begin부터 end까지 얕은 복사본을 반환 
- 복사니까 원본은 바뀌지 않음
- end 바로 전까지 복사하며, end가 없으면 끝까지 복사
- **배열, 문자열 대상**

```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));  // output: ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));  // output: ["camel", "duck"] --> index 4인 'elephant' 미포함

console.log(animals.slice(1, 5));  // output: ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));  // output: ["duck", "elephant"]

console.log(animals.slice(2, -1));  // output: ["camel", "duck"] --> index -1인 'elephant' 미포함
```
<br>

### **2021-06-24**

##### 1. s로 입력받는 모든 공백을 변환된 문자에 꼭 반영 해주셔야 합니다!!
- 아래와 같이 공백이 여러 개인 테스트케이스도 존재

```javascript
const str = "  3people   unFollowed   me"

let arr = str.split(' ');
console.log(arr)  // output ('' 잘보면 공백없음): [ '', '', '3people', '', '', 'unFollowed', '', '', 'me' ]

arr = arr.join(' ')
console.log(arr)  // output (str과 일치): "  3people   unFollowed   me" 
```

##### 2. 공백인지 아닌지 확인하는 조건문 추가 

<br>

# ✍️소스코드

### **2021-06-24 정확성 43.8점**

```javascript
function solution(s) {
  return s.split(' ').map(v => {
    return v[0].toUpperCase() + v.slice(1).toLowerCase();
  }).join(' ');
}
```

### **2021-06-24 정확성 통과 무려 +13점**

```javascript
function solution(s) {
  return s.split(' ').map(v => {
    if (v === '') return v;
    return v[0].toUpperCase() + v.slice(1).toLowerCase();
  }).join(' ');
}
```

<br>

# ✍️명답

```javascript
function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}
```

<br>

##### 1. str.charAt(index) : 문자열에서 특정 인덱스에 위치하는  단일문자를 반환
```javascript
const str = 'The quick brown fox';

const index = 4;

console.log(str.charAt(index));  // output: "q"
```

##### 2. str.substring(begin, end) : 문자열의 시작 인덱스로부터 종료 인덱스 직전까지 부분 문자열을 반환
- end가 없으면 문자열 끝까지 반환
```javascript
const str = 'Mozilla';

console.log(str.substring(1, 3));  // output: "oz"

console.log(str.substring(2));  // output: "zilla"
```