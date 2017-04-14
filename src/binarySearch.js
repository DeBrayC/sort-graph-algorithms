export default function binarySearch(array, number) {
//  your code here
const length = array.length
const middle = Math.ceil(array.length / 2)

  if (number == array[middle]) {
    return array[middle], number
  }
  else if (number > array[middle]) {
    let newArray = array.slice(0, array[middle])
    binarySearch(newArray)

    return array[middle], number
  }
  else if (number < array[middle]) {
    let newArray = array.slice(array[middle])
    binarySearch(newArray)

    return array[i], number

  }
}
