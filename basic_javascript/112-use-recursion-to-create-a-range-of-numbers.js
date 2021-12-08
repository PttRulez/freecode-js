function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  }
  const result = rangeOfNumbers(startNum + 1, endNum)
  result.unshift(startNum)
  return result
};