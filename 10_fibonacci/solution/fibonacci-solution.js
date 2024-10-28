const fibonacci = (countArg, memo = { 0: 0, 1: 1 }) => {
    // Parse countArg as an integer if it's not already a number
    const count = typeof countArg === 'number' ? countArg : parseInt(countArg);
    
    // Handle negative numbers
    if (count < 0) return "OOPS";
    
    // Check if the result for this count is already computed
    if (memo[count] !== undefined) return memo[count];

    // Recursively calculate and store result in memo
    memo[count] = fibonacci(count - 1, memo) + fibonacci(count - 2, memo);
    return memo[count];
};

// Another way to do it is by using an iterative approach with an array containing two values, 0 and 1.
// const fib = [0, 1];
// for (let i = 2; i <= count; i++) {
//    fib[i] = fib[i - 1] + fib[i - 2];
// }
// return fib[count];

module.exports = fibonacci;
