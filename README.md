# callbag-to-array

Convert a synchronous pullable source into an array


## Install

```sh
yarn install callbag-to-array
```


## Usage

```js
const { fromIter, pipe, map, filter } = require('callbag-basics')
const toArray = require('callbag-to-array')

pipe(
  fromIter([1,2,3,4]),
  filter(e => e < 4),
  map(e => e * 2),
  toArray
)
// [2,4,6]
```


## License

See LICENSE
