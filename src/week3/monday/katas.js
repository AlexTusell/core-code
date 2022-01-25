//kata 'Who likes it?'
function likes(names) {
    switch (names.length) {
      case 0:
        return 'no one likes this';
        break;
      case 1:
        return `${names[0]} likes this`;
        break;
      case 2:
        return `${names[0]} and ${names[1]} like this`;
        break;
      case 3:
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
        break;
      default:
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }

//kata 'Bit Counting'
var countBits = function (n) {
    let bin = '';
    const recur = (n) => {
      if (n === 0) {
        return;
      }
      bin += n % 2;
      let num = n / 2;
      return recur(Math.floor(num));
    };
    recur(n);
    bin.split('').reverse().join('');
    return bin.replace(/0/g, '').length;
  };

  //kata 'Decode the Morse code'
  decodeMorse = function (morseCode) {
    const morse = {
      '-----': '0',
      '.----': '1',
      '..---': '2',
      '...--': '3',
      '....-': '4',
      '.....': '5',
      '-....': '6',
      '--...': '7',
      '---..': '8',
      '----.': '9',
      '.-': 'A',
      '-...': 'B',
      '-.-.': 'C',
      '-..': 'D',
      '.': 'E',
      '..-.': 'F',
      '--.': 'G',
      '....': 'H',
      '..': 'I',
      '.---': 'J',
      '-.-': 'K',
      '.-..': 'L',
      '--': 'M',
      '-.': 'N',
      '---': 'O',
      '.--.': 'P',
      '--.-': 'Q',
      '.-.': 'R',
      '...': 'S',
      '-': 'T',
      '..-': 'U',
      '...-': 'V',
      '.--': 'W',
      '-..-': 'X',
      '-.--': 'Y',
      '--..': 'Z',
      '-.-.--': '!',
      '.-.-.-': '.',
      '--..--': ',',
      '...---...': 'SOS'
    };
    
    let words = morseCode.trim().split('  ');
    //letters its arrays inside of array
    let letters = words.map(l => l.split(' '));
    let decoded = [];
  
    for (let i = 0; i < letters.length; i++) {
      decoded[i] = [];
      for (let j = 0; j < letters[i].length; j++) {
        if (morse[letters[i][j]]) {
          decoded[i].push(morse[letters[i][j]]);
        }
      }
    }
    return decoded.map(l => l.join('')).join(' ');
  };