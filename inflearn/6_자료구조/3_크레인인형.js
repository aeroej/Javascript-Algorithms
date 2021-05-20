// moves의 원소 x --> board[i][x]를 0으로 바꾸기 
// for --> board[i][x] === 0 i++, board[i][x] !== 0인 경우 stack.push(board[i][x]) board[i][x] = 0
// stack에서 stack.push한 값이 === stack[-1]인 경우 stack.pop() stack.pop()
// --> stack.push하기 전에 값을 비교하기
// --> board[i][x] !== 0인 경우 board[i][x] === stack[-1]인 경우 stack.pop() cnt += 2
// --> board[i][x] !== 0인 경우 board[i][x] !== stack[-1]인 경우 stack.push(board[i][x])

// 이중반복문
// for (let x of moves)
// for (let i=0; i<board.length; i++)

function solution(board, moves){
    let cnt = 0;
    let stack = [];

    // for (let x of moves) {}
    moves.forEach(x => {
        x--;
        for (let i=0; i<board.length; i++) {
            if (board[i][x]) {  // board[i][x] !== 0
                if (board[i][x] === stack[stack.length-1]) {
                    stack.pop();
                    cnt += 2;
                }
                else stack.push(board[i][x])
                board[i][x] = 0;
                break;
            }
        }
    })
    return cnt;
}

let a= [[0,0,0,0,0],
        [0,0,1,0,3],
        [0,2,5,0,1],
        [4,2,4,4,2],
        [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));