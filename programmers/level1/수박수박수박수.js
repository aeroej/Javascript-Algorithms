function watermelon(n) {
    return n%2 ? "수박".repeat(parseInt(n/2)) + "수" : "수박".repeat(n/2);
}

console.log(watermelon(3));