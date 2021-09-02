/**
 * @fileoverview Fibonacci implementation
 *
 * compatible with big number case
 *
 * Usage:
 *   fibonacci(9000)
 *
 * @author Ken Zetta <https://github.com/z-ken>
 */

function fibonacci(n) {
  return n <= 78 ? safe(n) : bigFunc(n);

  function safe(n) {
    if (n == 0) return 0;
    let a = 0,
      b = 1,
      c;
    for (let i = 2; i <= n; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

  function bigFunc(n) {
    let a = "0",
      b = "1",
      c;
    for (let i = 2; i <= n; i++) {
      c = adder(a, b);
      a = b;
      b = c;
    }
    return b;
  }
  function adder(add1, add2) {
    const sumNums = [];
    const addNums1 = add1.split("").reverse();
    const addNums2 = add2.split("").reverse();
    const transform = (num) => (isNaN(num) ? 0 : Number(num));

    let up = 0;
    for (let i = 0; i <= Math.max(addNums1.length, addNums2.length); i++) {
      const sum = transform(addNums1[i]) + transform(addNums2[i]) + up;
      up = sum > 9 ? 1 : 0;
      sumNums[i] = sum % 10;
    }
    sumNums.reverse();
    return !sumNums[0] ? sumNums.join("").slice(1) : sumNums.join("");
  }
}
