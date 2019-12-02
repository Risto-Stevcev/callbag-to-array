const { expect } = require('chai')
const { fromIter, pipe, map, filter } = require('callbag-basics')
const toArray = require('.')

describe('callbag-to-array', () => {
  it('should convert a sync pullable source into an array', () => {
    const result = pipe(
      fromIter([1,2,3,4]),
      filter(e => e < 4),
      map(e => e * 2),
      toArray
    )
    expect(result).to.deep.equal([2,4,6])
  })
})
