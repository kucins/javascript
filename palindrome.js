function palindrome(str) {
  var newstr = str.toLowerCase().replace(/[\W_]/g,'');
  return newstr == str.toLowerCase().replace(/[\W_]/g,'').split('').reverse().join('');
}

palindrome("eye"); 