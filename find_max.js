const arr = [10,3,20,15,22,13,44,33,17]


function findMax(arr) {
    if(arr.length === 1) {
        return arr[0];
    }
    const op1 = arr[0];
    const op2 = findMax(arr.slice(1))
    if(op1> op2) {
        return  op1
    }
    return  op2;


}

console.log("findMax",findMax(arr));