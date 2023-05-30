// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) { //tenemos que pasar un bucle for para revisar todo los parámetros del array
        if (contacts[i].firstName === name) { //The function should check if name is an actual contact's firstName
            if (contacts[i].hasOwnProperty(prop)) { //.hasOwnProperty() method (checks if there’s a given property and returns a boolean) with prop as an argument.
                return contacts[i][prop]; // If it’s true, the value of prop is returned
            } else {
                return "No such property"; //If the second if statement fails, No such property is returned.
            }
        }
    }

    return "No such contact" //If the firstName parameter isn’t matched by the final contacts object, the for loop exits and No such contact is returned.
    // Only change code above this line
}

lookUpProfile("Akira", "likes");

//-----------------------------------------