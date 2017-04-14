import { expect } from 'chai'
import mergeSort from '../src/mergeSort'

const numbers = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
const newArray = mergeSort(numbers)

describe('mergeSort()', () => {

  it('should perform a merge sort to return an ordered array', () => {
    const numbers = [10, 2, 7, 5, 8, 3, 6, 1, 4, 9]
    const answer = mergeSort(numbers)

    expect(answer).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
