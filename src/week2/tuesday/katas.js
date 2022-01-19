//kata "Multiply"
const multiply = (a,b) => a * b

//kata "ASCII Total"
function uniTotal (string) {
    let num = 0;
    for (let i = 0; i < string.length; i++) {
      num += string[i].charCodeAt();
    }
    return num;
  }

//kata "get character from ASCII Value"
function getChar(c){
    return String.fromCharCode(c);
  }

//kata "Binary Addition"
function addBinary(a,b) {
    const sum = a + b;
    let bin = '';
   const recur = (sum) => {
     if ( sum === 0) {
       return;
     }
      bin += sum%2;
      let num = (sum / 2);
      return recur(Math.floor(num));
    }
   recur(sum);
   return bin.split("").reverse().join("");
  }

//kata "Student's Final Grade"
function finalGrade (exam, projects) {
    let final = 0;
    if (exam > 90 || projects > 10) {
      final = 100;
    } else if ( exam > 75 && projects >= 5 ) {
      final = 90;
    } else if ( exam > 50 && projects >= 2 ) {
      final = 75;
    }
    return final;
  }