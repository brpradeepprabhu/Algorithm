function bubbleSort(arr) {
    for( let i=arr.length-1;i>=0;i--) {
        for(let j=0;j<i;j++){
            if(arr[j+1]< arr[j]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
        console.log(arr)
    }
    return arr;
}

function mergeSort(arr) {

}
var unSortedValues = [ 12,6,18,14,22,24,32,3];
console.log("bubbleSort ==>",bubbleSort(unSortedValues))