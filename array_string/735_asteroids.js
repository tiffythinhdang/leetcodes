// const asteroidCollision = (asteroids) => {
//   if (asteroids.length < 2) return asteroids;
//   let res = [asteroids.shift()];

//   while (asteroids.length > 0) {
//     let currAst = res[res.length - 1];
//     let nextAst = asteroids.shift();

//     if (!canCollidde(currAst, nextAst)) {
//       res.push(nextAst);
//     } else {
//       if (compareAbsValue(currAst, nextAst) === 1) {
//         continue;

//       } else if (compareAbsValue(currAst, nextAst) === 0) {
//         res.pop();
//         continue;

//       } else {

//         while (res.length > 0) {
//           if ( !canCollidde(currAst, nextAst) ) {
//             break;
//           } else if (compareAbsValue(currAst, nextAst) === -1) {
//             res.pop();
//             currAst = res[res.length - 1] || 0;
//           } else if (compareAbsValue(currAst, nextAst) === 0) {
//             res.pop();
//             break;
//           } else {
//             break;
//           }
//         }
//         if ( !canCollidde(currAst, nextAst) ||
//           (res.length === 0 && compareAbsValue(currAst, nextAst) !== 0) ) {
//             res.push(nextAst);
//           }
//       }
//     }
//   }

//   return res;
// };

// const canCollidde = (curr, next) => {
//   if ((curr < 0 && next < 0) ||
//     (curr > 0 && next > 0) ||
//     (curr < 0 && next > 0)) return false;
//   return true;
// };

// const compareAbsValue = (num1, num2) => {
//   if ( Math.abs(num1) > Math.abs(num2) ) {
//     return 1;
//   } else if ( Math.abs(num1) === Math.abs(num2) ) {
//     return 0;
//   } else {
//     return -1;
//   }
// }

const asteroidCollision = (asteroids) => {
  const res = [];

  asteroids.forEach(ast => {
    let currAst = res[res.length - 1];
    let canCollide = res.length > 0 && ast < 0 && currAst > 0;
    console.log(`ast: ${ast}, curr: ${currAst}`)
    console.log(canCollide);

    if (canCollide) {
      while (res.length > 0 && ast < 0 && currAst > 0) {
        if (Math.abs(ast) === Math.abs(currAst)) {
          res.pop();
          break;
        } else if (Math.abs(ast) > Math.abs(currAst)) {
          res.pop();
          currAst = res[res.length - 1];
          continue;
        } else {
          break;
        }
      }
      if (res.length !== 0 || Math.abs(ast) !== Math.abs(currAst)) res.push(ast);
    } else {
      res.push(ast);
    }
    console.log(res)
    console.log("-------")
  })
  return res;
}

// console.log(asteroidCollision([10, 3, -5]));
// console.log(asteroidCollision([-5, -3, 5, 3]));
// console.log(asteroidCollision([10, -3, -5, -1]));
// console.log(asteroidCollision([-5, -3, 5, 3, -3, -6]));
// console.log(asteroidCollision([1, -2, -2, -2]));
// console.log(asteroidCollision([2, -1, 1, -2]));
console.log(asteroidCollision([-2, -2, 1, -2]));
// console.log(canCollidde(3, -3));