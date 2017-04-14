import { expect } from 'chai'
import bubbleSort from '../src/bubbleSort'

const numbers = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]

describe('bubbleSort()', () => {


  it('should perform a binary search to find given number in array', () => {

    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9])).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
