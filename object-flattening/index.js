function flattenObject(nestedObject) {
    const result = {};

    function recurse(obj, currentKey) {
        for (let key in obj) {
            const newKey = currentKey ? `${currentKey}.${key}` : key;
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                recurse(obj[key], newKey);
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    recurse(nestedObject, '');
    return result;
}

const input = {
    user: {
        info: {
            name: "Alice",
            age: 25
        },
        preferences: {
            theme: "dark",
            notifications: true
        }
    },
    status: "active"
};

console.log(flattenObject(input));
/*
Expected output:
{
    "user.info.name": "Alice",
    "user.info.age": 25,
    "user.preferences.theme": "dark",
    "user.preferences.notifications": true,
    "status": "active"
}
*/