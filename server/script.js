function isValid(string) {
  const appearances = [...string].reduce((ac, current) => {
    ac[current] = ac[current] ? ac[current] + 1 : 1
    return ac
  }, {})
  const appearancesArray = Object.values(appearances)
  const appearancesArraySorted = appearancesArray.sort((a, b) => a - b)

  const lf = appearancesArraySorted[0] // Least frequent character

  const a = appearancesArraySorted.filter((x) => x !== lf)

  if (a.length > 1) {
    // Need to remove more than 1 different characters
    return false
  } else {
    if (a[0] - lf > 1) {
      // Need to remove more than 1 of the same character
      return false
    } else {
      // I can remove 1 character
      return true
    }
  }
}

module.exports = { isValid }
