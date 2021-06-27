// 1
function solution(board, moves) {
    let cnt = 0;
    let stack = [];

    for (let x of moves) {
        x = x - 1;

        for (let i = 0; i < board.length; i++) {
            if (board[i][x] === stack[stack.length - 1]) {
                stack.pop();
                board[i][x] = 0;
                cnt += 2;
                break;
            }
            else if (board[i][x]) {
                stack.push(board[i][x]);
                board[i][x] = 0;
                break;
            }
        }
    }

    return cnt;
}

// 2
function solution(board, moves) {
    let cnt = 0;
    let stack = [];

    for (let x of moves) {
        x = x - 1;

        for (let i = 0; i < board.length; i++) {
            if (board[i][x]) {
                stack.push(board[i][x]);
                board[i][x] = 0;

                let len = stack.length;
                if (stack[len-1] === stack[len-2]) {
                    stack.pop();
                    stack.pop();
                    cnt += 2;
                }
                break;
            }
        }
    }
    return cnt;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]))