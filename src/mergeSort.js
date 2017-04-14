export default function mergeSort(numbers) {
  // your code here
  if (numbers.length < 2) {
    return numbers
  }

  const length = numbers.length
  const middle = Math.floor(length / 2)
  const left = numbers.slice(0, middle)
  const right = numbers.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}
  const merge = (left, right) => {
    const results = []

    while ( left.length && right.length ) {
      if (left[0] <= right[0]) {
        results.push(left.shift())
      } else {
        results.push(right.shift())
      }
    }
      while (left.length) {
        results.push(left.shift())
      }
      while (right.length) {
        results.push(right.shift())
      }
      return results
  }
