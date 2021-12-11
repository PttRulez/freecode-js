function getIndexToIns(arr, num) {
  let sorted = arr.sort(function(a, b) {
  return a - b;
});
  console.log(sorted)
  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i])
    if (sorted[i] >= num)
      return i
  }
  return sorted.length;
}

getIndexToIns([40, 60], 50);