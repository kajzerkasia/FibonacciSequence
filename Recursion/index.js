const fibonacci = n => {
    if (n < 2) return n;
    return (fibonacci(n - 1) + fibonacci(n - 2));
};

for(let i = 0; i < 30; i++) console.log(fibonacci(i));
