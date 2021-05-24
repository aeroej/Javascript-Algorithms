// 집합을 두 개의 부분집합으로 나누기 (서로소 집합)
// 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 "YES"

// set 두개 --> else --> set1에 있다 or set2에 있다
// if set1.length + set2.length === 전체 length --> set1.reduce() === set2.reduce() --> return "YES" 
// default return "NO"
/*
function solution(arr){
    let result = "NO";
    function DFS(v, arr1, arr2) {
        if (v === arr.length) {
            let sum1 = arr1.reduce((a, b) => a+b, 0);
            let sum2 = arr2.reduce((a, b) => a+b, 0);
            if (sum1 === sum2) result="YES";
        }
        else {
            let set1 = arr1.slice(); // 첫번째 부분집합
            let set2 = arr2.slice(); // 두번째 부분집합
            set1.push(arr[v]);
            DFS(v+1, set1, set2); // v가 첫번째 부분집합에 포함된 경우
            set1.pop();
            set2.push(arr[v]);
            DFS(v+1, set1, set2); // v가 두번째 부분집합에 포함된 경우
        }
    }
    DFS(0, [], []); // 첫번째 매개변수 v는 arr의 index
    return result;
}

let arr=[1, 3, 5, 6, 7, 10];
console.log(solution(arr));
*/


// DFS() 매개변수로 array를 보내지 않기
// DFS(index, sum)
// 합이 같은 부분집합
// 초기값은 무엇을 할 것인가? --> index
// 언제 return할 것인가? --> YES인 경우를 찾았을 때
// 언제 출력할 것인가 ?
function solution(arr) {
    let total = arr.reduce((a, b) => a+b, 0);
    let result = "NO", flag = false;
    function DFS(v, sum) {
        if (flag === true) return;
        else if (v > arr.length) {
            if (total-sum === sum) {
                result = "YES";
                flag = true;
            }
        }
        else {
            DFS(v+1, sum);
            DFS(v+1, sum+arr[v]);
        }
    }
    DFS(0, 0);
    return result;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));