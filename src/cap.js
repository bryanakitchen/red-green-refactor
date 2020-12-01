const capitalizeAndFilter = array => {
    const newArray = [];

    array.map(item => {
        const upperItem = item.toUpperCase();

        if(upperItem.startsWith('F')) {
            return;
        } else {
            newArray.push(upperItem);
        }
    })
    return newArray;
}

module.exports = {
    capitalizeAndFilter
};