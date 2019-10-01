function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

//O(1) because the array length is only used to multiply the number being returned. It doesn't have any affect on the time it takes to compute.