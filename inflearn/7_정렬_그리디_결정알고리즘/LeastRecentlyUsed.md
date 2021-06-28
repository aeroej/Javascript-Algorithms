[![인프런](../인프런표지.jpg)](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard)
# [👩🏻‍💻문제링크](https://www.inflearn.com/course/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EB%AC%B8%EC%A0%9C%ED%92%80%EC%9D%B4/dashboard)

[인프런 섹션7] LRU Least Recently Used (Javascript)
유료 강의인 관계로 문제 설명은 생략합니다.

<br>

# ✍️Idea Sketch

### **2021-06-27**

#### 1. 앞쪽이 최근 작업, 뒤쪽이 오랫동안 사용하지 않은 작업

#### 2. 캐시에 없는 새로운 작업 수행 시
- 캐시 맨 앞에 추가
- 나머지 작업은 한 칸씩 뒤로 밀림, 가장 오랫동안 사용하지 않은 작업 삭제
- queue, queue.unshift(), queue.pop()
- queue, queue.push(), queue.shift()

#### 3. 캐시에 있는 작업 수행 시
- 해당 작업 맨 앞으로 이동
- queue.includes() --> queue.indexOf(task) --> queue.substr(queue.indexOf(task), 1)

```javascript
for (let x of arr) {
    let task = queue.indexOf(x)
    if (task) {
        queue.unshift(x);
        queue.substr(task, 1);
    }
    else {
        queue.unshift(x);
        queue.pop();
    }
}
```

#### 4. queue 초기값
```javascript
let queue = [];
for (let i=0; i<size; i++) queue.unshift(arr[i]);
```
> **문제점**
처음 5개의 작업 중 중복이 있을 수 있다.

_____________________
<br>

#### 5. 연산 정리
- let task = queue.indexOf(x)로 캐시에 있는 작업인지 아닌지 무조건 확인
- 캐시에 있는 경우, 캐시를 삭제하고, queue 맨 처음에 작업 추가
- 캐시에 없는 경우, queue 맨 처음에 작업추가
- queue.length가 size보다 큰 경우 queue.pop()

> **주의**
substr()은 문자열 대상
splice()가 배열 대상


<br>

# ✍️소스코드

### **2021-06-27**

```javascript
function solution(arr, size) {
    let queue = [];
    
    for (let x of arr) {
        let task = queue.indexOf(x);
        if (task !== -1) queue.splice(task, 1);

        queue.unshift(x);
        if (queue.length > size) queue.pop();
    }

    return queue;
}
```
