export const getTranslateY = (transform) => {
  // find translateY
  const match = transform.match('translateY')
  if (!match) return

  // get value
  let str = transform.substr(match.index)
  str = str.replace('translateY', '')
  str = str.replace(/\(|\)|%/g, '')

  return Number(str)
}
