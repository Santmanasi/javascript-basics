function arrayfreq() {
  var i;
  var num = 12;
  var array = [12, 12, 14, 16, 14, 12, 12, 12, 12];
  var count = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] == num) {
      count = count + 1;
    }
  }
  console.log(count);
}
arrayfreq();
