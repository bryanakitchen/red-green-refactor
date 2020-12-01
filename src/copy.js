const copyAndPush = (array, item) => {
    const newArray = [...array, item];
    return newArray;
}

module.exports = {
    copyAndPush
};