//

function sentensify(str) {
    return str
    .split(/\W/) //[ 'May', 'the', 'force', 'be', 'with', 'you' ]
    .join(" "); //May the force be with you
}
console.log(sentensify("May-the-force-be-with-you"));

//***********Converting Strings to URL Slugs************

function urlSlug(title) {
    return title
    .split(" ") //[ '', 'Winter', 'Is', '', 'Coming' ]
    .filter(word => {if (word != "") return word;}) //[ 'Winter', 'Is', 'Coming' ]
    .join("-") //Winter-Is-Coming
    .toLowerCase() //winter-is-coming
}
// Only change code above this line
console.log(urlSlug("Hold The Door"));