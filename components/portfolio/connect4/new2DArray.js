function new2DArray(numOfRows, numOfCols) {
    /**
     * Creates a 2-dimensional array (numOfRows x numOfCols) 
     * and initializes each element to null.
     * Returns the created 2-dimensional array. 
     */
    const twoDimArr = new Array(numOfRows);
    for (let rowIdx = 0; rowIdx < twoDimArr.length; rowIdx++) {
        twoDimArr[rowIdx] = new Array(numOfCols);
        for (let colIdx = 0; colIdx < twoDimArr[rowIdx].length; colIdx++) {
            twoDimArr[rowIdx][colIdx] = null;
        }
    }
    return twoDimArr;
}

export default new2DArray;