//kata 'Your order, please'
function order(words) {
    if(words ==  '') return '';
    let wordsArray = words.split(' ');
    let newArray = [];
    let index = [];
    wordsArray.forEach(w => index.push(w.match(/\d+/)))
    index.sort()
    for(let j = 1; j <= index.length; j++){
      newArray.push(index[j - 1].input)
    }
    return newArray.join(' ');
  }

//kata 'Counting Duplicates'
function duplicateCount(text) {
    let array = text.toLowerCase().split('');
    let letters = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                letters.push(array[i])
                break;
            }
        }
    }
    for(let x = letters.length - 1; x >=0; x--){
        if(letters.indexOf(letters[x]) !== x) letters.splice(x,1);
      }
    return letters.length;
}

//kata 'Simple Pig Latin'
function pigIt(str){
    let resp = [];
    str.split(' ').forEach(a => {
      if (/^[a-zA-Z]+$/.test(a)) {
        let letter = a.substring(0,1);
        a = a.substring(1,a.length).concat(letter,'ay');
      }
      resp.push(a);
    });
    return resp.join(' ');
  }