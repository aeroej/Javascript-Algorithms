# [👩🏻‍💻문제링크](https://programmers.co.kr/learn/courses/30/lessons/68644)

문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

제한사항
numbers의 길이는 2 이상 100 이하입니다.
numbers의 모든 수는 0 이상 100 이하입니다.
입출력 예
numbers	result
[2,1,3,4,1]	[2,3,4,5,6,7]
[5,0,2,7]	[2,5,7,9,12]
입출력 예 설명
입출력 예 #1

2 = 1 + 1 입니다. (1이 numbers에 두 개 있습니다.)
3 = 2 + 1 입니다.
4 = 1 + 3 입니다.
5 = 1 + 4 = 2 + 3 입니다.
6 = 2 + 4 입니다.
7 = 3 + 4 입니다.
따라서 [2,3,4,5,6,7] 을 return 해야 합니다.
입출력 예 #2

2 = 0 + 2 입니다.
5 = 5 + 0 입니다.
7 = 0 + 7 = 5 + 2 입니다.
9 = 2 + 7 입니다.
12 = 5 + 7 입니다.
따라서 [2,5,7,9,12] 를 return 해야 합니다.

# ✍️Idea Sketch

1. numbers를 정렬한다. sort()
2. 슬라이드윈도우 left, right 변수 
3. sort() --> 두 수를 순차적으로 뽑는 문제점 발견
```javascript
numbers.sort((a, b) => {
  if (!arr.includes(a+b)) arr.push(a+b)
})
```
4. 이중반복문 --> 효율성 걱정 --> 일단 해보기로
  - arr 정렬필요 sort()

# ✍️소스코드

2021-06-16

```javascript
function solution(numbers) {
  let arr = [];
  for (let i=0; i<numbers.length-1; i++) {
    for (let j=i+1; j<numbers.length; j++) {
      if (!arr.includes(numbers[i] + numbers[j])) arr.push(numbers[i] + numbers[j])
    }
  }
  return arr.sort((a, b) => a-b)
}
```

2021-06-16

```javascript
function solution(numbers) {
  let arr = [];
  for (let i=0; i<numbers.length-1; i++) {
    for (let j=i+1; j<numbers.length; j++) {
      arr.push(numbers[i] + numbers[j])
    }
  }
  return [...new Set(arr)].sort((a, b) => a-b);
}
```

# ✍️명답

### Set 사용하기

이중반복문의 !arr.includes() 생략 --> 바로 arr.push() --> 아래의 코드로 arr의 중복 제거
```javascript
const result = [...new Set(arr)]
```

1. Set은 중복없는 배열

```javascript
let mySet = new Set();
let mySet = new Set([1, 2, 3, 4, 5]);
mySet.add( 6 );
```

2. Set을 array로 만드는 방법

```javascript
let arr = Array.from(mySet)
let arr = Array.from(mySet).sort((a, b) => b-a);
```