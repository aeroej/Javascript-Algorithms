function DFS(n){
    if (n === 0) return;
    else {
        DFS(n-1);
        console.log(n);
    }
}
DFS(3);