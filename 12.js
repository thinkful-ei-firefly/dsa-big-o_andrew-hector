const sheep = function (num) {
    for (let i = 1; i <= num; i++){
        console.log(`${i}: Another sheep has jumped over the fence`)
    }
    console.log('0: All sheep have jumped over the fence')
}
//o(n)

sheep(3)