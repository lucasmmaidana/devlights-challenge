function isValid(string) {
  const frequencies = [...string].reduce((ac, current) => {
    ac[current] = ac[current] ? ac[current] + 1 : 1
    return ac
  }, {})
  const frequenciesArray = Object.values(frequencies)
  const frequenciesArraySorted = frequenciesArray.sort((a, b) => a - b)

  const lowerFrequency = frequenciesArraySorted[0]

  const moreFrequents = frequenciesArraySorted.filter(
    (frequency) => frequency !== lowerFrequency
  )

  if (moreFrequents.length === 0) {
    // All characters appear the same number of times
    return true
  } else {
    if (moreFrequents.length === 1 && moreFrequents[0] - lowerFrequency === 1) {
      // I can remove one of the same character
      return true
    }
  }

  return false
}

module.exports = { isValid }
