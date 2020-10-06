
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(matrix === undefined) {return []}
	let arr = [];
	for(let i=0; i<matrix.length; i++) {
		if(i%2 === 0) {
			matrix[i] = matrix[i].sort(function(a,b){return a-b});
			} else {
			matrix[i] = matrix[i].sort(function(a,b){return b-a});
			}
		arr = arr.concat(matrix[i]);
		}
	return arr;
}
