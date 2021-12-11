function bouncer(arr) {
  return arr.filter(item => {
    if(item) { 
      return true 
    }
  });
}

bouncer([7, "ate", "", false, 9]);