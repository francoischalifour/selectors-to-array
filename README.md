# selectors-to-array

> Converts [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors), [DOM elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) and [NodeLists](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) into arrays

## Install

```console
$ npm install --save selectors-to-array
```

## Usage

```js
const selectorsToArray = require('selectors-to-array')

selectorsToArray('input, button')
// => [input#player-1, input#player-2, button]

selectorsToArray(document.querySelector('input'))
// => [input#player-1]

selectorsToArray(document.querySelectorAll('input'))
// => [input#player-1, input#player-2]

const elements = [
  document.querySelector('#player-1'),
  ...document.querySelectorAll('button')
]
selectorsToArray(elements)
// => [input#player-1, button]
```

## License

MIT © [François Chalifour](http://francoischalifour.com)
