const users = [
    { id: 1, name: "Alice", age: 17, city: "New York" },
    { id: 2, name: "Bob", age: 25, city: "Los Angeles" },
    { id: 3, name: "Charlie", age: 30, city: "New York" },
    { id: 4, name: "Diana", age: 22, city: "Chicago" }
];

function filterAdults(users) {
    return users.filter(user => user.age >= 18);
}

function mapUserNames(users) {
    return users.map(user => user.name);
}

function groupUsersByCity(users) {
    return users.reduce((acc, user) => {
        if (!acc[user.city]) {
            acc[user.city] = [];
        }
        acc[user.city].push(user);
        return acc;
    }, {});
}

console.log(filterAdults(users)); // [{ id: 2, ... }, { id: 3, ... }, { id: 4, ... }]
console.log(mapUserNames(users)); // ["Alice", "Bob", "Charlie", "Diana"]
console.log(groupUsersByCity(users)); 
// {
//   "New York": [{ id: 1, ... }, { id: 3, ... }],
//   "Los Angeles": [{ id: 2, ... }],
//   "Chicago": [{ id: 4, ... }]
// }