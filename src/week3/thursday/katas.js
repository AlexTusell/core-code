//kata 'Fold an array'
function foldArray(array, runs) {
    let count = 0;
    let iterarray = array;
    let otherarray = []
    let arraybank = []
    while (count < runs) {
        let n = iterarray.length - 1;
        for (i = 0; i < iterarray.length; i++) {
            if (i == n) {
                otherarray.push(iterarray[i]);
                break;
            } else if (i + 1 == n) {
                otherarray.push(iterarray[i] + iterarray[i + 1]);
                break;
            } else {
                for (j = n; j >= 0; j--) {
                    otherarray.push(iterarray[i] + iterarray[j]);
                    n--;
                    break;
                }
            }
        }
        count++;
        iterarray = otherarray;
        arraybank.push(otherarray);
        otherarray = []
    }
    return arraybank[arraybank.length - 1];
}

//kata 'Encrypt this!'
var encryptThis = function (text) {
    let words = text.split(' ');
    let letters = words.map((e) => e.split(''));
    let encoded = [];
    for (let i = 0; i < letters.length; i++) {
      let secondLetter = '';
      for (let j = 0; j < letters[i].length; j++) {
        if (j == 0) {
          encoded.push(letters[i][j].charCodeAt(0));
        } else if (j == 1) {
          secondLetter = letters[i][j];
          encoded.push(letters[i][letters[i].length - 1])
        } else if (j == letters[i].length - 1) {
          encoded.push(secondLetter);
        } else {
          encoded.push(letters[i][j])
        }
      }
      encoded.push(' ');
    }
    return encoded.join('').trim();
  };

//kata 'Format a string of names like 'Bart, Lisa & Maggie'. (retired)' submit bug!!!
function list(names) {
    let text = names.map((e, i) =>
      i == names.length - 2
        ? `${e.name} & `
        : i == names.length - 1
        ? `${e.name}`
        : `${e.name}, `
    );
    return text.join('');
  }