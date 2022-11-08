function sumofarrays() {
  var i;
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var sum = 0;

  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
    console.log(sum);
  }
}
sumofarrays();
