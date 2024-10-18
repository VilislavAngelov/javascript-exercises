const removeFromArray = function(arr, ...numToRemove) {
    let newArr = [];

    arr.forEach((num) => {
        if(!numToRemove.includes(num)) {
            newArr.push(num);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
