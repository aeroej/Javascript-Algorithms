// 전위순회
let answer = '';
function preorder(n) { 
    if (n>7) return;
    else {
        answer += n;
        preorder(n*2);
        preorder(n*2+1);
    }
}
preorder(1);
console.log(answer);


// 중위순회
answer = '';
function inorder(n) { 
    if (n>7) return;
    else {
        inorder(n*2);
        answer += n;
        inorder(n*2+1);
    }
}
inorder(1);
console.log(answer);


// 후위순회
answer = ''; 
function postorder(n) { 
    if (n>7) return;
    else {
        postorder(n*2);
        postorder(n*2+1);
        answer += n;
    }
}
postorder(1);
console.log(answer);
