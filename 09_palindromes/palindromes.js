const palindromes = function (str) {
    let pattern = /[a-z0-9]/gi;
    let cleanStr = str.toLowerCase().match(pattern).join("");
    let reverse = cleanStr.split("").reverse().join("");
  
    if(cleanStr === reverse) {
      return true;
    }
      return false;
};

// Do not edit below this line
module.exports = palindromes;
