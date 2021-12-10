function findLongestWordLength(str) {
  let result = 0
  let arr = str.split(' ')
  console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    result = (arr[i].length > result) ? arr[i].length : result
  }
  console.log(result)
  return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");