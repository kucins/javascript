
function largestOfFour(arr) {
	var largestArr =[];
	var max=0;
	for(var i = 0; i<arr.length; i++){
		for(var j = 0; j<arr[i].length; j++) {
			if(arr[i][j] > max ) { max = arr[i][j];}
		} 
	largestArr.push(max) ;
	max=0;
	}
	return largestArr;
}
