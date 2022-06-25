function binarySearch(item, itemArray) {
    let lower = 0;
    let upper = itemArray.length - 1;

    while (lower <= upper) {
        let mid = Math.floor((lower + upper) / 2)
        if (itemArray[mid] === item) {
            return mid;
        }
        if (item > itemArray[mid]) {
            lower = mid + 1;
        } else {
            upper = mid - 1;
        }
    }

    if (lower > upper) {
        return -1;
    }
}


const sortedArray = [3, 6, 12, 14, 18, 22, 24, 32]

console.log("binary search - 22", binarySearch(22, sortedArray));
console.log("binary search - 250", binarySearch(250, sortedArray));