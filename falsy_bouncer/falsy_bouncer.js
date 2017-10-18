function bouncer(arr) {
	var val ='';
	var myArr= [];
	for(var i=0; i<arr.length; i++){
		val = Boolean(arr[i]);
	if(val) myArr.push(arr[i]); 
	}
	return myArr;
}

bouncer([7, "ate", "", false, 9]);

