// Write your cade below:
function caclRemaindar(a, b) {
    var c = a % b
    return c
}

function caclSum(arr) {
    var result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
    }

    return result
}

function caclSumInConditon(arr, num) {
    var result = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            result += arr[i]
        }
    }
    return result
}

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}