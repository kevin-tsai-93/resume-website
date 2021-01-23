function deepCopy2DArray(arr) {
    const newArr = new Array(arr.length);
    
    for (let rowIdx = 0; rowIdx < newArr.length; rowIdx++) {
        newArr[rowIdx] = new Array(arr[rowIdx].length);
        for (let colIdx = 0; colIdx < newArr[rowIdx].length; colIdx++) {
            newArr[rowIdx][colIdx] = arr[rowIdx][colIdx];
        }
    }

    return newArr;

}

export default deepCopy2DArray;