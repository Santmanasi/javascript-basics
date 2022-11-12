function runningsum() {
  var arr = [1, 2, 3, 4, 5];
  var sum = [];
  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      sum[i] = arr[i];
    } else {
      sum[i] = sum[i - 1] + arr[i];
    }
  }
  console.log(sum);
}
runningsum();
//sum = [1, 2, 3, 4, 5];
//sum =[1,3, 6,10, 15  ]
