//#region Fib Recursive
const fib = (n, memo) => {
  if (memo[n]) {
    return memo[n];
  } else if (n == 1 || n == 2) {
    return 1;
  } else {
    const result = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    return result;
  }
};

let StopWatchStart = new Date();
console.log(`Fibonacci of 5: ${fib(5, [])}`);
console.log(`Fibonacci of 10: ${fib(10, [])}`);
console.log(`Fibonacci of 20: ${fib(20, [])}`);
console.log(`Fibonacci of 35: ${fib(35, [])}`);
console.log(`Fibonacci of 100: ${fib(100, [])}`);
// Fibonacci of 1476 is the calc, to not display as `Infinity`
console.log(`Fibonacci of 1476: ${fib(1476, [])}`);
let StopWatchEnd = new Date();
console.log(`Took ${StopWatchEnd - StopWatchStart}ms to calc`);

//#endregion

//#region Fib Memoized
console.log(`Now with global memo!`);
let memoized = [];
const fibGlobalMemo = (n) => {
  if (memoized[n]) {
    return memoized[n];
  } else if (n == 1 || n == 2) {
    return 1;
  } else {
    const result = fibGlobalMemo(n - 1) + fibGlobalMemo(n - 2);
    memoized[n] = result;
    return result;
  }
};
StopWatchStart = new Date();
console.log(`Fibonacci of 5: ${fibGlobalMemo(5)}`);
console.log(`Fibonacci of 10: ${fibGlobalMemo(10)}`);
console.log(`Fibonacci of 20: ${fibGlobalMemo(20)}`);
console.log(`Fibonacci of 35: ${fibGlobalMemo(35)}`);
console.log(`Fibonacci of 100: ${fibGlobalMemo(100)}`);
console.log(`Fibonacci of 1476: ${fibGlobalMemo(1476)}`);
console.log(`Fibonacci of 10000: ${fibGlobalMemo(10000)}`);
StopWatchEnd = new Date();
console.log(`Took ${StopWatchEnd - StopWatchStart}ms to calc`);
//#endregion

//#region Fib Bottom Up
console.log(`Now with bottom up!`);
let fibBottomUp = (n) => {
  if (n == 1 || n == 2) return 1;
  fibArray = [];
  fibArray[1] = 1;
  fibArray[2] = 1;
  for (let index = 3; index <= n; index++) {
    fibArray[index] = fibArray[index - 1] + fibArray[index - 2];
  }
  return fibArray[n];
};
StopWatchStart = new Date();
console.log(`Fibonacci of 5: ${fibBottomUp(5)}`);
console.log(`Fibonacci of 10: ${fibBottomUp(10)}`);
console.log(`Fibonacci of 20: ${fibBottomUp(20)}`);
console.log(`Fibonacci of 35: ${fibBottomUp(35)}`);
console.log(`Fibonacci of 100: ${fibBottomUp(100)}`);
console.log(`Fibonacci of 1476: ${fibBottomUp(1476)}`);
console.log(`Fibonacci of 10000: ${fibBottomUp(10000)}`);
StopWatchEnd = new Date();
console.log(`Took ${StopWatchEnd - StopWatchStart}ms to calc`);

//#endregion
