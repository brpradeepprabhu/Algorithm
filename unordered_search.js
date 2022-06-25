
function unorderedSearch(item,itemList) {
    let result = -1;
    for(let i=0;i<itemList.length;i++) {
        if(itemList[i] === item) {
            result = i;
            break;
        }
    }
    return result;
}


const value = [20,25,2,5,6,22,33,40];
console.log("unordered_search", unorderedSearch(22,value))