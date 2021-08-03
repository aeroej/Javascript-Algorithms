# [👩🏻‍💻문제링크](https://programmers.co.kr/learn/courses/30/lessons/42747)

[프로그래머스 42747] H-Index (Javascript)
[![프로그래머스](../프로그래머스표지.png)](https://programmers.co.kr/learn/courses/30/lessons/42747)

<br>

# ✍️Idea Sketch

### **2021-07-09**

#### 1. 문제 이해
- h번 이상 인용된 논문이 h편 이상

#### 2. 로직
- 인용된 횟수 내림차순 정렬 [6, 5, 3, 1, 0]
- value번 이상 인용된 논문이 index+1편이라는 뜻
- 4번 이상 인용된 논문이 3편 [6, 5, 4, 1, 0]
- 따라서 if (value >= index+1)일 때, H-index는 index+1
- 1번 이상 인용된 논문이 4편 : 1 < 4이므로 H-index 없음

```javascript
let result = 0;
arr.sort((a, b) => b-a);

for (let i=0; i<arr.length; i++) {
  if (arr[i] >= i+1) {
    result = index + 1;
  }
}
```

<br>

# ✍️소스코드

### **2021-07-09**

```javascript
function solution(arr) {
  let result = 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= i + 1) {
      result = i + 1;
    }
  }

  return result;
}
```
