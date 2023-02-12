
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix || matrix.length === 0) {
    return [];
  } else {
    return matrix.reduce((acc, cur, i) => {
      let result = acc.concat((!(i % 2) ? cur : cur.reverse()));
      return result;
    }, [])
  }
}
