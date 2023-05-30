function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.splice(0, 0, n);
        return countArray;
    }
}
console.log(countdown(10));
