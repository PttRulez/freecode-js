function findElement(arr, func) {
  for (let elem of arr) {
    console.log(elem)
    if (func(elem)) {
      return elem
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);