function solution(need, plan) {
    need = need.split('');
    plan = plan.split('');
    
    while (plan.length) {
        if (plan.shift() === need[0]) need.shift();
    }
    
    return need.length ? "NO" : "YES";
}

console.log(solution('CBA', 'CADBGE'));  // NO