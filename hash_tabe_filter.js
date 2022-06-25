const items = ["apple", "pear", "banana", "pear", "banana", "apple", "banana", "apple", "pear", "apple", "banana", "apple", "banana", "apple", "pear"]


function uniqueItem (items) {
    const itemMap = new Map();
    for(const key of items) {
        if(itemMap.has(key)) {
            const value = itemMap.get(key);
            itemMap.set(key,value+1)
        } else {
            itemMap.set(key,1);
        }
    }

    return itemMap;
}

console.log("unique items with count", uniqueItem(items))