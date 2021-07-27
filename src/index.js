module.exports = function reverse (n) {
    let number = Math.abs(n);
    let arr = number.toString().split("");
    let reversed = arr.reverse().join("");
    return reversed;
}





