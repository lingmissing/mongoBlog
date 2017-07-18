export const classNames = data => {
  let classNames = []
  for (let name in data) {
    if (data[name]) {
      classNames.push(name)
    }
  }
  return classNames.join(' ')
}
