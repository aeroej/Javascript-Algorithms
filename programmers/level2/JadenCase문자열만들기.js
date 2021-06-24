function solution(s) {
  return s.split(' ').map(v => {
    if (v === '') return v;
    return v[0].toUpperCase() + v.slice(1).toLowerCase();
  }).join(' ');
}

console.log(solution("  3people   unFollowed   me"))

