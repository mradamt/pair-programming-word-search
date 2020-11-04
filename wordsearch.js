const transpose = function(matrix) {
  const output = [];
  let size1 = matrix.length;
  let size2 = matrix[0].length;
  
  for (let i = 0; i < size2; i++) {
    const internalArray = [];
  
    for (let j = 0; j < size1; j++) {
      internalArray.push(matrix[j][i]);
      
    }
    output.push(internalArray);
  }
  
  return output;
};
  

const wordSearch = (letters, word) => {
  if (letters.length === 0) return false;

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let l of horizontalJoin) {
    if (l.includes(word) ||
            l.split("").reverse().join('').includes(word))
      return true;
  }
    
  const transposedLetters = transpose(letters);
  const verticalJoin = transposedLetters.map(ls => ls.join(''));
  for (let l of verticalJoin) {
    if (l.includes(word)) return true;
  }
  /* pseudo code of diagonal
    for r c
        if r+1 c+1
        
    letters.map(ls => ls[i][j].join(''))
    */
  // Word not found horizontally or vertically
  return false;
};

module.exports = wordSearch;