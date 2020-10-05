
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  let newArr = []
    if(matrix.length == 0) return matrix;
    for(let i = 0; i < matrix.length; i++) {
          if(i % 2 == 0){
            for(let j = 0; j < matrix[i].length; j++){
              newArr.push(matrix[i][j])
            } 
          } else {
              for(let j = matrix[i].length - 1; j >= 0; j -= 1){
              newArr.push(matrix[i][j])
            }
           
        }
    }
  return newArr
}
