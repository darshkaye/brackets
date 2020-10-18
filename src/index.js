module.exports = function check(str, bracketsConfig) {
    const arrStr = str.split(""),
        pairBrackets = Object.fromEntries(bracketsConfig);
    let workArr = [];
    
    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === pairBrackets[workArr[workArr.length - 1]]) {
            if (workArr.length == 0) {
                return false;
            } else {
                workArr.pop();
            };
        } else if (pairBrackets[arrStr[i]] !== undefined) {
            workArr.push(arrStr[i]);
        } else {
            return false;
        };
    };

    return workArr.length === 0;
}
