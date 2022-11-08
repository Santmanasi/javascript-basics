function maxarray() {
  let index;
  var array = [-10, 0, 10, 20, 0, -100];
  max = array[0];
  for (index = 1; index < array.length; index++) {
    if (array[index] > max) {
      max = array[index];
    }
  }
  console.log("Maximum array element is", max);
}
maxarray();
