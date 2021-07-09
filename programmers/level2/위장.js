function solution(clothes) {
  return Object.values(
    clothes.reduce((obj, cloth) => {
      obj[cloth[1]] = (obj[cloth[1]] || 0) + 1;
      return obj;
    }, {})  // reduce의 초기값 : 객체 {}
  ).reduce((a, b) => a * (b + 1), 1) - 1;
}

console.log(solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]))