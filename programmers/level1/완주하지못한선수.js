function solution(participant, completion) {
  participant = participant.sort()
  completion = completion.sort()
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) return participantc[i]
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]))