[![프로그래머스](../프로그래머스표지.png)](https://programmers.co.kr/learn/courses/30/lessons/12953)
# [👩🏻‍💻문제링크](https://programmers.co.kr/learn/courses/30/lessons/12953)

[프로그래머스 12953] N개의 최소공배수 (Javascript)
문제 설명
두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

제한 사항
arr은 길이 1이상, 15이하인 배열입니다.
arr의 원소는 100 이하인 자연수입니다.
입출력 예
arr	result
[2,6,8,14]	168
[1,2,3]	6
<br>

# ✍️Idea Sketch

### **2021-06-23**

##### 1. 최대공약수 GCD (Greatest Common Divisor), 최소공배수 LCM (Least Common Multiple)

##### 2. 유클리드 호제법
- 시간복잡도 : O(logN)

##### 3. 최대공약수 GCD 구하기
- GCD(A, B) = GCD(B, A%B)
- A%B가 0이되는 순간 종료

##### 4. 최소공배수 LCM 구하기
- (두 수의 곱) 나누기 (최대공약수)
- LCM = A*B / GCD

```javascript
function solution(n, m) {
  let lcm = n*m;
  while(m%n) [m, n] = [n, m%n];  // 3
  return [n, lcm/n];  // 4
}
```

##### 5. 숫자가 2개를 초과할 경우 유클리드 호제법, 가능한가?

- A, B의 최소공배수를 구한다.
- 그 최소공배수와 C와의 최소공배수를 구한다.
- 그 최소공배수와 D와의 최소공배수를 구한다.
- ...

##### 6. 두 수의 최소공배수를 return하는 LCM() 함수 생성
##### 7. LCM() 함수의 리턴값과 그 다음 arr값을 대상으로 LCM() 함수 실행 
- arr 끝까지 반복

<br>

# ✍️소스코드

### **2021-06-23 정확성 통과**

```javascript
function LCM(m, n) {
  let lcm = m * n;
  while (m % n) [m, n] = [n, m % n];
  return lcm / n;
}

function solution(arr) {
  let lcm = LCM(arr[0], arr[1]);
  for (let i = 2; i < arr.length; i++) lcm = LCM(lcm, arr[i]);
  return lcm;
}

```
<br>

# ✍️명답

### **5번을 arr.reduce로 구현함**
### **재귀를 사용해 최대공약수 GCD() 함수를 직관적으로 구현함**

```javascript
function nlcm(num) {
 return num.reduce((a,b) => a*b / gcd(a,b))  
}

function gcd(a, b) {
  return a % b ? gcd(b, a%b) : b
}
```