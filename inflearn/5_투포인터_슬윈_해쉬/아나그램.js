function solution(str1, str2) {
  let hash1 = new Map();
  let hash2 = new Map();

  for (let i = 0; i < str1.length; i++) {
    hash1.set(str1[i], (hash1.get(str1[i]) || 0) + 1);
    hash2.set(str2[i], (hash2.get(str2[i]) || 0) + 1);
  }
  
  if (hash1.size !== hash2.size) return "NO";

  for (let [key, val] of hash1) {
    if (val !== hash2.get(key)) return "NO";
  }
  
  return "YES";
}

console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
