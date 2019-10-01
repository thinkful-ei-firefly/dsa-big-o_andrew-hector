const sheep = function (num) {
    for (let i = 1; i <= num; i++) {
        console.log(`${i}: Another sheep has jumped over the fence`)
    }
    console.log('0: All sheep have jumped over the fence')
}
//o(n)

const powerCalculator = function (x, y) {
    if (y < 0) {
        return 'exponent should be >= 0'
    }
    else {
        return (x ^ y)
    }
}
//o(1)

const revString = function (string) {
    let str = string.split("")
    str = str.reverse()
    str = str.join("")
    return str
}
//o(1)