//kata 'Valid Parentheses'
function validParentheses(parens) {
  let array = [];
  for (i = 0; i < parens.length; i++) {
    let par = array[array.length - 1]
    if (parens[i] == '(') {
      array.push(parens[i])
    } else if (par == '(' && parens[i] == ')') {
      array.pop()
    } else return false;
  }
  return array.length ? false : true;
}

//kata 'Convert string to camel case'
function toCamelCase(str) {
  const array = str.replace(/-/g, '_').split(/_/g);
  let resp = [array[0]];
  for (i = 1; i < array.length; i++) {
      resp.push(array[i].replace(array[i][0], array[i][0].toUpperCase()));
  }
  return resp.join('');
}

//kata ''
var uniqueInOrder = function (iterable) {
  let newArray = typeof iterable == 'string' ? iterable.split('') : iterable;
  let resp = [];
  let prev;
  newArray.forEach((e) => {
    if (!prev || prev != e) {
      resp.push(e);
      prev = e;
    }
  });
  return resp;
};
  