    var romaNums = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I']
    ];	
	var romNum = "";
   function ToRoman(num) {

    if (num === 0) {
        return '';
    }
    for (var i = 0; i < romaNums.length; i++) {
        if (num >= romaNums[i][0]) {
            romNum += romaNums[i][1];
            return romaNums[i][1] + ToRoman(num - romaNums[i][0]);
        }
    }
   return romNum;
   }  
	function Convert(){
	
	var x = document.getElementById("text1").value;
	
	var y = ToRoman(x);
	
	document.getElementById("snc").innerHTML = "Sonuç : " + y ;  
	}
   