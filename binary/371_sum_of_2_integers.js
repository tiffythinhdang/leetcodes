const getSum = (num1, num2) => {
  let biNum1 = toBinary(num1);
  let biNum2 = toBinary(num2);
  let sumDigits = [];
  let carryOver = 0;

  while (biNum1.length > 0 || biNum2.length > 0) {
    let digit1 = biNum1.pop() || 0;
    let digit2 = biNum2.pop() || 0;

    if (digit1 === 0 && digit2 === 0 && carryOver === 0) {
      sumDigits.unshift(0);

    } else if (digit1 === 0 && digit2 === 0 && carryOver === 1) {
      sumDigits.unshift(1);
      carryOver = 0;

    } else if (digit1 === 1 && digit2 === 1 && carryOver === 0) {
      sumDigits.unshift(0);
      carryOver = 1;

    } else if (digit1 === 1 && digit2 === 1 && carryOver === 1) {
      sumDigits.unshift(1);
      carryOver = 1;

    } else if (digit1 === 0 && digit2 === 1 && carryOver === 1) {
      sumDigits.unshift(0);
      carryOver = 1;

    } else if (digit1 === 1 && digit2 === 0 && carryOver === 1) {
      sumDigits.unshift(0);
      carryOver = 1;

    } else {
      sumDigits.unshift(1);
      carryOver = 0;
    }
  }
  if (carryOver === 1) sumDigits.unshift(1);
  
  return sumDigits;
}

const toBinary = (num) => {
  if (num === 0) return 0;
  let digits = [];

  while (num > 0) {
    digits.unshift(num % 2);
    num = Math.floor(num / 2);
  }

  return digits;
}

// console.log(toBinary(2))
// console.log(toBinary(0))
// console.log(toBinary(1))
console.log(toBinary(4))
console.log(toBinary(5))
console.log(getSum(4, 5))