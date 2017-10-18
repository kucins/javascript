function factorialize(num) {
	var fact = 1;
	if(num==0) fact=1;
	else{
		for(var i=1; i <= num ; i++){
		fact*=i ; }
	}
	return fact;
}