# [๐ฉ๐ปโ๐ป๋ฌธ์ ๋งํฌ](https://programmers.co.kr/learn/courses/30/lessons/42747)

[ํ๋ก๊ทธ๋๋จธ์ค 42747] H-Index (Javascript)
[![ํ๋ก๊ทธ๋๋จธ์ค](../ํ๋ก๊ทธ๋๋จธ์คํ์ง.png)](https://programmers.co.kr/learn/courses/30/lessons/42747)

<br>

# โ๏ธIdea Sketch

### **2021-07-09**

#### 1. ๋ฌธ์  ์ดํด
- h๋ฒ ์ด์ ์ธ์ฉ๋ ๋ผ๋ฌธ์ด hํธ ์ด์

#### 2. ๋ก์ง
- ์ธ์ฉ๋ ํ์ ๋ด๋ฆผ์ฐจ์ ์ ๋ ฌ [6, 5, 3, 1, 0]
- value๋ฒ ์ด์ ์ธ์ฉ๋ ๋ผ๋ฌธ์ด index+1ํธ์ด๋ผ๋ ๋ป
- 4๋ฒ ์ด์ ์ธ์ฉ๋ ๋ผ๋ฌธ์ด 3ํธ [6, 5, 4, 1, 0]
- ๋ฐ๋ผ์ if (value >= index+1)์ผ ๋, H-index๋ index+1
- 1๋ฒ ์ด์ ์ธ์ฉ๋ ๋ผ๋ฌธ์ด 4ํธ : 1 < 4์ด๋ฏ๋ก H-index ์์

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

# โ๏ธ์์ค์ฝ๋

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
