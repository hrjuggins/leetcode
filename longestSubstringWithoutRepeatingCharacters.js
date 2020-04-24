var lengthOfLongestSubstring = function(s) {
  let answer = []
  let max = 0
  let curr = 0
  for (let i = 0; i < s.length; i++) {
      if (answer.includes(s[i])) {
          answer = answer.slice(answer.indexOf(s[i])+1, answer.length)
          answer.push(s[i])
      } else {
          answer.push(s[i])
          curr = answer.length
          if (curr > max) {
              max = curr
          }
      }
  }
  return max
};
