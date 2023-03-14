
class User {
    constructor(name) {
        this.name = name;
    }
}


const users = [
    new User('John'),
    new User('Alex'),
    new User('Mary'),
    new User('Zoe'),
];


users.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    }
    if (a.name > b.name) {
        return 1;
    }
    return 0;
});

console.log(users);
