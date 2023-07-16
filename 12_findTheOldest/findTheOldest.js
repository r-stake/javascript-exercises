const findTheOldest = function(arr) {
    let howOld = []; 
    howOld = arr.map(person => {
        if (person.yearOfDeath === undefined) {
            let age = new Date();
            age = age.getFullYear() - person.yearOfBirth;
            return {name: person.name, age: age};
        } else {
            let age = person.yearOfDeath - person.yearOfBirth;
            return {name: person.name, age: age};
        }
    });
    howOld.sort( (a, b) => b.age - a.age );
    return howOld[0];
};

// Do not edit below this line
module.exports = findTheOldest;
