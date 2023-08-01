const fibonacci = n => {
    if(n < 2) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        b += a;
        a = b - a;
    }
    return b;
};

for(let i = 0; i < 30; i++) console.log(fibonacci(i));