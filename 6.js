function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}

//O(2^n) or more accurately, O(n^n) since the arr.length is ran through a for loop nested in another for loop based on arr.length.