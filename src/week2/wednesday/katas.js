//kata "Holiday VIII - Duty Free"
function dutyFree(normPrice, discount, hol){
    return Math.floor((hol / (discount/100)) / normPrice);
  }

//kata "Twice as old"
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld * 2));
  }

//kata "Valid Spacing"
function validSpacing(s) {
    let array = s.split("");
    if(array[0] === ' ' || array[array.length -1] === ' ' ) return false;
    let indexArray = [];
    for (let i = 0; i < array.length; i++){
     if (array[i] === ' ') {
       indexArray.push(i)
     }  
    }
    let ini = indexArray[0];
    for (let i = 1; i < indexArray.length; i++) {
      if (ini - indexArray[i] === -1) return false;
      ini = indexArray[i];
    }
    return true
  };

//kata "Fake Binary"
function fakeBin(x){
    //console.log(!isNaN(x) && x !== '')
    let result = '';
    x.split('').forEach(i => parseInt(i) < 5 ? result += 0 : result += 1)
    return result;
  }