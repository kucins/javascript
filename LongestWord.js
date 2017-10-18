function findLongestWord(str) {
	
	var words = str.split(' ');
	var len= 0;
 	for(var i = 0 ; i < words.length; i++ )
	{
		if(words[i].length > len) len = words[i].length;
	}
	return len;
}

findLongestWord("The quick brown fox jumped over the lazy dog");