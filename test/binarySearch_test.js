import { expect } from 'chai'
import binarySearch from '../src/binarySearch'

describe('binarySearch()', () => {
  const numbers = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

  it('should find specific number within array of values', () => {

    expect(binarySearch(numbers, 45)).to.eql(45)
  })
})
