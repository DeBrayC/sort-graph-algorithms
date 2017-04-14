import closestPair from '../src/closestPair'
import { expect } from 'chai'

describe ('closestPair()', () => {
  const points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]
]

  it ('should return coordinates with least distance between them', () => {

    expect (closestPair(points)).to.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })

  })

})
