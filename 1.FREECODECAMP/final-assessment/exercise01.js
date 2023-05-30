//leer una palabra "al derecho y al revés"

function palindrome(str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

console.log(palindrome("My age is 0, 0 si ega ym."));