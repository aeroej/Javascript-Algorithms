function solution(participant, completion) {
  let s = new Set(completion);
  
  return participant.filter(p => {
    if (!s.has(p)) return p;
    else s.delete(p)
  })[0]
}

console.log(solution(["mislav", "stanko", "mislav", "ana"],	["stanko", "ana", "mislav"]))