//kata 'Find the odd int'
function findOdd(A) {
    let resp = [];
    A.forEach((el) => {
      if (!resp.includes(el)) {
        resp.push(el);
      } else {
        resp = resp.filter((e) => e !== el);
      }
    });
    return resp[0];
  }

  //kata 'Stop gninnipS My sdroW!'
  function spinWords(string){
    const words = string.split(' ');
    const resp = [];
    for (let word of words) {
      if(word.length >= 5) {
       resp.push(word.split('').reverse().join(''));
      } else {
        resp.push(word);
      }
      resp.push(' ');
    }
    return resp.join('').trim();
  }