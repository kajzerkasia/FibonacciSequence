const fibonacci = n => {
    if (n < 2) return n;
    let f = (1 + Math.sqrt(5)) / 2;
    return Math.round((f**n - (f - 1)**n) * Math.sqrt(5) / 5);
};

for (let i = 0; i < 30; i++) console.log(fibonacci(i));