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
  if(arr.length>1) {
      //spliting the array in to two
      const mid = Math.floor(arr.length/2);
      const leftArr = arr.slice(0,mid);
      const rightArr =arr.slice(mid)
      // recurive
      mergeSort(leftArr);
      mergeSort(rightArr);
      let i=0, j=0, k=0;
      // finding the smallest one
      while(i < leftArr.length && j < rightArr.length) {
          if(leftArr[i] < rightArr[j]) {
              arr[k] = leftArr[i];
              i++;
          }
          else {
              arr[k] = rightArr[j];
              j++;
          }
          k++;
      }
      // adding the remaining values
      while (i< leftArr.length) {
          arr[k] = leftArr[i];
          i++;
          k++;
      }
      while (j< rightArr.length) {
          arr[k] = rightArr[j];
          j++;
          k++;
      }
  }
console.log(arr)
  return arr;
}
var unSortedValues = [ 12,6,18,14,22,24,32,3];
console.log("bubbleSort ==>",bubbleSort(unSortedValues))
