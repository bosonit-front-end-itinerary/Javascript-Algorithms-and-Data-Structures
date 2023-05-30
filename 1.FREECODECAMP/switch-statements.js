//Selecting from Many Options with Switch Statements
/*Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta*/

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
    case 1:
        answer = "alpha";
        break;
    case 2:
        answer = "beta";
        break;
    case 3:
        answer = "gamma";
        break;
    case 4:
        answer = "delta";
        break;
    }
    // Only change code above this line
    return answer;
}

caseInSwitch(1);
caseInSwitch(2);
caseInSwitch(3);
caseInSwitch(4);

//-------------------------------------------


//Adding a Default Option in Switch Statements
//Write a switch statement to set answer for the following conditions:
/*a - apple
b - bird
c - cat
default - stuff*/

function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
    case "a":
        answer = "apple";
        break;
    case "b":
        answer = "bird";
        break;
    case "c":
        answer = "cat";
        break;
    default:
        answer = "stuff";
        break;
    }

    // Only change code above this line
    return answer;
}

switchOfStuff(1);
switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");

//-------------------------------------------

//Multiple Identical Options in Switch Statements
/*Write a switch statement to set answer for the following ranges:
1-3 - Low
4-6 - Mid
7-9 - High

Note: You will need to have a case statement for each number in the range.*/

function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
    case 1:
    case 2:
    case 3:
        answer = "Low";
        break;
    case 4:
    case 5:
    case 6:
        answer = "Mid";
        break;
    case 7:
    case 8:
    case 9:
        answer = "High";

    }

    // Only change code above this line
    return answer;
}

sequentialSizes(1);
sequentialSizes(2);
sequentialSizes(3);
sequentialSizes(4);
sequentialSizes(5);
sequentialSizes(6);
sequentialSizes(7);
sequentialSizes(8);
sequentialSizes(9);

//-------------------------------------------

//Replacing If Else Chains with Switch
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line

if (val === "bob") {
    answer = "Marley";
} else if (val === 42) {
    answer = "The Answer";
} else if (val === 1) {
    answer = "There is no #1";
} else if (val === 99) {
    answer = "Missed me by this much!";
} else if (val === 7) {
    answer = "Ate Nine";
}

// Only change code above this line

// ----> TURNED IT INTO:

switch (val) {
case "bob":
    answer = "Marley";
    break;
case 42:
    answer = "The Answer";
    break;
case 1:
    answer = "There is no #1";
    break;
case 99:
    answer = "Missed me by this much!";
    break;
case 7:
    answer = "Ate Nine";
    break;
default:
    answer = "";
}

return answer;
}

chainToSwitch("bob");
chainToSwitch(42);
chainToSwitch(1);
chainToSwitch(99);
chainToSwitch(7);
chainToSwitch("John");
chainToSwitch(156);