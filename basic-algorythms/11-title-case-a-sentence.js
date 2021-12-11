function titleCase(str) {
  let arr = str.split(' ');
  arr = arr.map((item) => {
    console.log(item)
    let lower = item.toLowerCase()
    let result =  lower[0].toUpperCase() + lower.slice(1)
    console.log(result)
    return result
  })
  console.log(arr.join(' '))
  return arr.join(' ');
}

titleCase("I'm a little tea pot");