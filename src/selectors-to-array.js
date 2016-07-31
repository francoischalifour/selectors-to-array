const selectorsToArray = selectors => {
  return typeof selectors === 'string'
    ? [...document.querySelectorAll(selectors)]
    : selectors.nodeType
      ? [selectors]
      : Array.isArray(selectors)
        ? selectors
        : [...selectors]
}

module.exports = selectorsToArray
