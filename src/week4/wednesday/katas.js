//kata 'Array.diff'
function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e));
  }

//kata 'Create Phone Number'
function createPhoneNumber(numbers) {
    return `(${numbers.slice(0, 3).join('')}) ${numbers
      .slice(3, 6)
      .join('')}-${numbers.slice(6, 10).join('')}`;
  }