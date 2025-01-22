
function flattenArray(nestedArray, depth) {
    if (depth === undefined) depth = Number.MAX_SAFE_INTEGER;
    if (depth < 1) return nestedArray.slice();

    let result = [];
    for (let item of nestedArray) {
        if (Array.isArray(item) && depth > 0) {
            result = result.concat(flattenArray(item, depth - 1));
        } else {
            result.push(item);
        }
    }
    return result;
}

console.log(flattenArray([1, [2, [3, [4, 5]]]], 2)); //  [1, 2, 3, [4, 5]]
console.log(flattenArray([1, [2, [3, [4, 5]]]])); // [1, 2, 3, 4, 5]
