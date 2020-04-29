const longestPalindrome = (nums1) => {
  let strArr = [...nums1]
  let longest = 0
  let longestMatch = []
  let check = []
  strArr.map((i, index) => {
      check.push(i)
      // Create copy of array as reverse method reverse array in place
      let copyCheck = [...check]
      let reverseCheck = copyCheck.reverse()
      if (check.join() === reverseCheck.join()) {
          if (check.length > longest) {
              longest = check.length
              longestMatch = copyCheck
          }
      } 
  })
  return longestMatch
};
