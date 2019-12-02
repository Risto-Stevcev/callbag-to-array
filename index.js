const toIterable = require('callbag-to-iterable')

const toArray = source => Array.from(toIterable(source))

module.exports = toArray
