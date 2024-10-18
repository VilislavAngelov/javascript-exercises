const sumAll = function(num1, num2) {
let sum = 0;
let larger
let smaller

if(typeof num1 != "number" || typeof num2 != "number") {
    return 'ERROR';
}

if(num1 % 1 != 0 || num2 % 1 != 0) {
    return 'ERROR';
}

if(num1 < num2 && num1 >= 0) {
    larger = num2;
    smaller = num1;
} else if (num1 > num2 && num2 >= 0){
    larger = num1;
    smaller = num2;
}else {
    return 'ERROR';
}

    for(smaller; smaller <= larger; smaller++){
        sum += smaller;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;
