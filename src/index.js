// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if (!matrix) {
        return arr;
    }
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i % 2 === 0) {
                arr.push(matrix[i][j]);
            } else {
                arr.push(matrix[i][matrix[i].length - j - 1]);
            }
        }
    }
    return arr;
}
