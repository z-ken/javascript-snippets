/**
 * @fileoverview Probabilities for rolling one dice
 *
 * A route in a graph which has a given length
 * from the start point of the route
 * we roll dice for certain times
 * we move steps according to the dice point every roll
 * and eventually we exactly arrive the finish point
 *
 * This algorithm is to figure out all the probably count
 * of the dice rolling series composition
 *
 *
 * @author Ken Zetta <https://github.com/z-ken>
 */

//------------------------------------------------------------------------------
// Table for memorize
//------------------------------------------------------------------------------
let table = [];

//------------------------------------------------------------------------------
// Implementation - 1: Recursive
//------------------------------------------------------------------------------
function step(n) {
  let localStep = 0;

  if (n == 0) {
    return 1;
  }

  for (let i = 1; i <= 6; i++) {
    if (n >= i) {
      if (typeof table[n - i] == "undefined") {
        table[n - i] = step(n - i);
      }
      localStep += table[n - i];
    } else break;
  }
  return localStep;
}

const t0 = Date.now();
console.log("possibleStepCount:", step(700));
console.log(Date.now() - t0);

//------------------------------------------------------------------------------
// Implementation - 2: Non-recursive  (More Efficient)
//------------------------------------------------------------------------------
function step2(n) {
  table[0] = 1;
  for (let i = 1; i <= n; i++) {
    let localSteps = 0;
    for (let j = 1; j <= 6; j++) {
      if (i >= j) {
        localSteps += table[i - j];
      }
    }
    table[i] = localSteps;
  }

  return table[n];
}

const t1 = Date.now();
console.log("possibleStepCount:", step2(700));
console.log(Date.now() - t1);
