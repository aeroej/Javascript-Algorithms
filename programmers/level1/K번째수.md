[![프로그래머스](../프로그래머스표지.png)](https://programmers.co.kr/learn/courses/30/lessons/42748)
# [👩🏻‍💻문제링크](https://programmers.co.kr/learn/courses/30/lessons/42748)

[프로그래머스 42748] K번째수 (Javascript)
문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
2에서 나온 배열의 3번째 숫자는 5입니다.
배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한사항
array의 길이는 1 이상 100 이하입니다.
array의 각 원소는 1 이상 100 이하입니다.
commands의 길이는 1 이상 50 이하입니다.
commands의 각 원소는 길이가 3입니다.
입출력 예
array	commands	return
[1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
입출력 예 설명
[1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
[1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
[1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

# ✍️Idea Sketch

### 2021-06-18

##### 1. i~j까지 배열 자르기 --> 정렬 --> K번째수
##### 2. commands.length만큼 반복 
```javascript
commands.forEach(command => {
  let arr = array.splice().sort();
  result.push();
})
```

##### 3. array.splice(index, 제거할 요소의 개수, 추가할 요소)
- 배열 요소를 삭제/교체/추가 
- 원본이 바뀜
```javascript
const months = ['Jan', 'March', 'April', 'June'];

months.splice(1, 0, 'Feb');  // index 1에 'Feb' 추가 (0개 제거)
console.log(months);  // output: ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');  // index 4를 'May'로 대체 (1개 "June" 제거)
console.log(months);  // output: ["Jan", "Feb", "March", "April", "May"]
```

##### 4. array.slice(begin, end)
- 배열 인덱스 begin부터 end까지 얕은 복사본을 반환 
- 복사니까 원본은 바뀌지 않음
- end 바로 전까지 복사하며, end가 없으면 끝까지 복사
```javascript
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));  // output: ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));  // output: ["camel", "duck"] --> index 4인 'elephant' 미포함

console.log(animals.slice(1, 5));  // output: ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));  // output: ["duck", "elephant"]

console.log(animals.slice(2, -1));  // output: ["camel", "duck"] --> index -1인 'elephant' 미포함
```

##### 5. 원본이 바뀌면 안되므로, array.slice() 사용

# ✍️소스코드

### 2021-06-18 정확성 통과

```javascript
function solution(array, commands) {
  let res = [];
  commands.forEach(command => {
    let arr = array.slice(command[0] - 1, command[1]).sort((a, b) => a-b);  // i번째 숫자부터 j번째 숫자까지 자르고 정렬
    res.push(arr[command[2] - 1])  // k번째에 있는 수를 구하기
  })
  return res;
}
```

# ✍️명답

### command[0], command[1], command[2] 명시적으로 만들기

```javascript
const [sPosition, ePosition, position] = command
```

- arr.map()을 사용하여 바로 return 
- 내 소스코드의 res.push() 필요x

```javascript
function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)  // i번째 숫자부터 j번째 숫자까지 자르기
            .sort((a,b) => a - b)  // 정렬

        return newArray[position - 1]  // k번째에 있는 수를 구하기
    })
}
```