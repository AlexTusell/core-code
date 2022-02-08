//kata 'Detect Pangram'
function isPangram(string) {
    const array = [...new Set(string.split('').filter((e) => /[a-zA-Z]/.test(e)))];
    return array.length < 26 ? false : true;
}

//kata 'Find the missing letter'
function findMissingLetter(array) {
    let alphabet =
      array[0] == array[0].toUpperCase()
        ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        : 'abcdefghijklmnopqrstuvwxyz';
    let startingPoint = alphabet.indexOf(array[0]);
  
    for (let i = 0; i < array.length + 1; i++) {
      if (array[i] !== alphabet[startingPoint + i]) {
        return alphabet[startingPoint + i];
      }
    }
  }

//kata 'Find the unique number'
function findUniq(arr) {
    let repeat = [];
    const tempArray = [...arr].sort();
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i + 1] === tempArray[i]) {
        repeat.push(tempArray[i]);
      }
    }
    return arr.filter(e => e !== repeat[0])[0]
  }

//kata 'Reverse or rotate?' (pending)

//kata 'What's Your Poison?' (pending)