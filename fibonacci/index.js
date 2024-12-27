function fibs(n) {
    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        seq.push(seq[i - 1] + seq[i - 2]);
    }
    return seq;
}

console.log(fibs(8));

function fibsReq(n) {
    if (n == 1) return [0];
    if (n == 2) return [0, 1];
    let prev = fibsReq(n - 1);
    return prev.concat([prev[prev.length - 1] + prev[prev.length - 2]]);
}

console.log(fibsReq(8));
