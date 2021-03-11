export const getTranslateY = (transform) => {
  // Find translateY
  const match = transform.match('translateY')
  if (!match) {
    if (!transform.includes('translate')) return

    let str = transform.replace('translate', '')
    str = str.replace('(', '').replace(')', '')
    str = str.substring(str.indexOf(',') + 1)
    str = str.replace('%', '')
      .replace('px', '')
      .replace('rem', '')
      .replace('re', '')
      .replace('pt', '')
      .trim()

    return Number(str)
  } else {
    // Get value
    let str = transform.substr(match.index)
    str = str.replace('translateY', '')
    str = str.replace(/\(|\)|%/g, '')

    return Number(str)
  }
}
