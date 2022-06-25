function quickSort(arr, first, last) {
    if (first < last) {
        const pivotIndex = partiton(arr, first, last)
        quickSort(arr, first, pivotIndex - 1)
        quickSort(arr, pivotIndex + 1, last)
    }
    return arr
}

function partiton(arr, first, last) {
    const pivot = arr[first];
    let lower = first + 1;
    let upper = last;
    let done = false
    while (!done) {
        while (arr[lower] < pivot && lower <= upper) {
            lower++;
        }
        while (arr[upper] > pivot && lower <= upper) {
            upper--;
        }
        if (upper < lower) {
            done = true;
        } else {
            const temp = arr[lower];
            arr[lower] = arr[upper];
            arr[upper] = temp;
        }
    }
    console.log("upper",upper)
    const temp = arr[first];
    arr[first] = arr[upper];
    arr[upper] = temp;

    return upper


}

const unSortedValues = [12, 6, 18, 14, 22, 24, 32, 3];
console.log("quickSort ==>", quickSort(unSortedValues,0,unSortedValues.length-1))