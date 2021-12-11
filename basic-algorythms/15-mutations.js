function mutation(arr) {
  let letters = arr[1].toLowerCase().split('')
  let lower = arr[0].toLowerCase()

  for (let i = 0; i < letters.length; i++) {
    if (lower.indexOf(letters[i]) == -1)
      return false;
  }
  return true
}

mutation(["hello", "hey"]);