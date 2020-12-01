const capitalizeAndFilter = array => {
    const newArray = [];
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        const upperItem = item.toUpperCase();

        if(upperItem.startsWith('F')) {
            continue;
        }else {
            newArray.push(upperItem);
        }
    }
    return newArray;
}

module.exports = {
    capitalizeAndFilter
};