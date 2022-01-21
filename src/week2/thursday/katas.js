//kata 'Exclamation marks series #2: Remove all exclamation marks from the end of sentence'
function remove(string) {
    while (string.endsWith('!')) {
        string = string.slice(0, string.length - 1)
    }
    return string;
}

//kata 'Vowel remover'
function shortcut(string) {
    return string.replace(/[aeiou]/g, '')
}

//kata 'Rock Paper Scissors!'
const rps = (p1, p2) => {
    if (p1 == p2) return 'Draw!';
    if ((p1 === 'scissors' && p2 === 'paper') ||
        (p1 === 'paper' && p2 === 'rock') ||
        (p1 === 'rock' && p2 === 'scissors')) return 'Player 1 won!';
    return 'Player 2 won!';
};

//kata 'Persistent Bugger.'
function persistence(num) {
    let count = 0;
    while (num >= 9) {
        let arrayNumber = String(num).split('').map(Number);
        /*let mul = 1;
        for(let i = 0 ; i < arrayNumber.length; i++) {
          mul *= arrayNumber[i];
        }*/
        num = arrayNumber.reduce((i, j) => i * j);
        count++;
    }
    return count;
}