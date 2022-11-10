function palindrome() {
  let isPal = true;
  var arr = [16, 22, 21, 22, 16];
  var i = 0;
  var j = arr.length - 1;
  while (i < j) {
    if (arr[i] == arr[j]) {
      i++;
      j--;
    } else {
      isPal = false;
      console.log("It is not a palindrome");
      break;
    }
  }
  if (isPal == true) {
    console.log("It is a Palindrome");
  }
}
palindrome();
