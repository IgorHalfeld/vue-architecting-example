
export default {
  name: 'capitalize',
  handler (value) {
    const firstLetter = value.substr(0, 1).toUpperCase()
    const wordResidue = value.substr(1)

    return `${firstLetter}${wordResidue}`
  }
}
