function minarray() {
  let index;
  var array = [-10, 0, 10, 20, 0, -100];
  min = array[0];
  for (index = 1; index < array.length; index++) {
    if (array[index] < min) {
      min = array[index];
    }
  }
  console.log("Minimun array element is", min);
}
minarray();
