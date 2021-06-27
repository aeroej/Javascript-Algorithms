[![인프런](../인프런표지.jpg)](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard)
# [👩🏻‍💻문제링크](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard)

[인프런 섹션7] Special Sort (Javascript)
유료 강의인 관계로 문제 설명은 생략합니다.

<br>

# ✍️Idea Sketch

### **2021-06-27**

#### 1. 음수는 앞쪽, 양수는 뒤쪽

#### 2. 단, 배열에 등장하는 순서는 동일해야 함

#### 3. 어떤 정렬을 써야하는가? 
- 선택정렬 : 인접하지 않은 두 원소를 교환하므로 2번 위배
- 버블정렬 : 인접한 두 원소를 교환하므로 적절
- 삽입정렬 : 인접하지 않은 원소를 가져와 정렬하므로 2번 위배

#### 4. 버블 정렬
- 더 큰 수를 뒤로 보내는 간단한 정렬 알고리즘
- 두 수가 양수와 음수 순으로 인접해있을 때, 두 수를 교환

```javascript
for (let i=arr.length-1; i>=0; i--) {
    for (let j=0; j<i; j++) {
        if (arr[j] > 0 && arr[j+1] < 0) [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
}
```

<br>

# ✍️소스코드

### **2021-06-27**

```javascript
function solution(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > 0 && arr[j + 1] < 0) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
    }
    return arr;
}
```
