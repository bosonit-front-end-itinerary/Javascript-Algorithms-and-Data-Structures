//Split a String into an Array Using the split Method

//BY SPACE
const str = "Hello World";
const bySpace = str.split(" ");

//BY SPACE, NOT WITH PUNCTUATION
function splitify(str) {
    return str.split(/\W/);
}
splitify("Hello World,I-am code");

//BY DIGITS
const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);

