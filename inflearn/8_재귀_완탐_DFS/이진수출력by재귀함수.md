[![인프런](../인프런표지.jpg)](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard)
# [👩🏻‍💻문제링크](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard)

[인프런 섹션8] 재귀함수를 이용한 이진수 출력 (Javascript)
유료 강의인 관계로 문제 설명은 생략합니다.

<br>

# ✍️Idea Sketch

### **2021-06-28**

#### 1. 10진수를 2진수로 출력
#### 2. (n%2) 의 결과를 res.push()
#### 3. n = Math.floor(n/2);
#### 4. res.reverse().join(' ');

#### 5. DFS() 재귀함수 구성
- 종료조건
- DFS() 재귀호출
- 내부로직

#### 6. 숫자를 문자열로 전환하는 방법 2가지
- 방법 1. String(num);
- 방법 2. num + '';

<br>

# ✍️소스코드

### **2021-06-28**
- 내부로직 실행 후 DFS() 재귀호출
- 역순으로 출력하기 위해 arr.reverse() 사용

```javascript
let res = [];

function DFS(n) {
  if (n === 0) return;
  res.push(n % 2);
  DFS(Math.floor(n / 2));
}

DFS(11);
console.log(res.reverse().join(''));
```

### **2021-06-28**
- DFS() 재귀호출 후 내부로직
- 역순으로 출력할 필요가 없으므로 문자열로 구현

```javascript
let res = '';

function DFS(n) {
  if (n === 0) return;
  DFS(Math.floor(n / 2));
  res += n%2 + '';
}

DFS(11);
console.log(res);
```
