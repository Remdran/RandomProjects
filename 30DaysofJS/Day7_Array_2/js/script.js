const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

    // Some and Every Checks
    // Array.prototype.some()  // is at least one person 19 or older? // Checks if atleast one thing in the array meets the criteria
    const isAdult = people.some(function(person) {
        const currentYear = new Date().getFullYear();
        if(currentYear - person.year >= 19) {
            return true;
        }
    });
    console.log({isAdult});     // Putting {} in the console log will return an object with the name of the variable and the result

    // Array.prototype.every() // is everyone 19 or older? // Checks to see if everything meets the criteria
        const allAdults = people.every(function(person) {
        const currentYear = new Date().getFullYear();
        if(currentYear - person.year >= 19) {
            return true;
        }
    });
    console.log(allAdults);

    // Array.prototype.find()  // Find is like filter, but instead returns just the one you are looking for // find the comment with the ID of 823423
    const comment = comments.find(function(comment) {
        if(comment.id === 823423) {
            return true;
        }
    });
    console.log(comment);

    // Array.prototype.findIndex()  // Find the comment with this ID   // delete the comment with the ID of 823423
    const index = comments.findIndex(function(index) {
        if(index.id === 823423) {
            return true;
        }
    });
    console.log(index);

    comments.splice(index,, 1);     // Delete the item from the array

    // const newComments = [                    // Another way to delete the item from the array by creating a new array with all but the 
    //     ...comments.slice(0, index),         // one we want to be deleted
    //     ...comments.slice(index+1)
    // ];