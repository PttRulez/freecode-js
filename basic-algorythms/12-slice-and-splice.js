function frankenSplice(arr1, arr2, n) {
  let begin = arr2.slice(0,n)
  let finish = arr2.slice(n,)
  return [...begin, ...arr1, ...finish];
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);