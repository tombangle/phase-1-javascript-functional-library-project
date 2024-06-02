function myEach(collection, callback) {
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i], i, collection);
        }
    } else if (typeof collection === 'object') {
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}

function myMap(collection, callback) {
    if (Array.isArray(collection)) {
        const result = [];
        for (let i = 0; i < collection.length; i++) {
            result.push(callback(collection[i], i, collection));
        }
        return result;
    } else if (typeof collection === 'object' && collection !== null) {
        const result = [];
        for (const key in collection) {
            if (collection.hasOwnProperty(key)) {
                result.push(callback(collection[key], key, collection));
            }
        }
        return result;
    }
}

function myReduce(collection, callback, initialValue) {
    let result;
    let values;
    let startIndex = 0;

    if (Array.isArray(collection)) {
        values = collection.slice();
    } else if (typeof collection === 'object' && collection !== null) {
        values = Object.values(collection);
    } else {
        throw new Error('The collection provided is neither an array nor an object.');
    }

    if (typeof initialValue !== 'undefined') {
        result = initialValue;
    } else {
        result = values[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < values.length; i++) {
        result = callback(result, values[i], i, collection);
    }

    return result;
}

function myFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return array[i];
        }
    }
}

function myFilter(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            result.push(array[i]);
        }
    }
    return result;
}

function arraysEqual(a, b) {
    if (a === b) return true;
    if (a === null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

function myFirst(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
}

function myLast(array, n) {
    return n === undefined ? array[array.length - 1] : array.slice(-n);
}

function myKeys(obj) {
    const keys = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            keys.push(key);
        }
    }
    return keys;
}

function myValues(obj) {
    const values = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            values.push(obj[key]);
        }
    }
    return values;
}