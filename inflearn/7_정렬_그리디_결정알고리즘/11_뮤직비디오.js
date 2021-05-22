function count(songs, capacity){
    let cnt = 1;
    let sum = songs[0];
    for (let i=1; i<songs.length; i++) {
        sum += songs[i];
        if (sum > capacity) {
            sum = songs[i];
            cnt++;
        }
    }
    return cnt;
}


function solution(m, songs){
    let lt = Math.max(...songs);
    let rt = songs.reduce((a, b) => a+b, 0);
    let min = Number.MAX_SAFE_INTEGER;
    let mid = Math.floor((lt+rt)/2);
    while(true) {
        
        let cnt = count(songs, mid);
    }
    return min;
}

let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));

// console.log(count(arr, 27))