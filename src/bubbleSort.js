export default function bubbleSort(array){
  // your code here
  if (!array) {
    return 'numbers must be in array'
  }
  // if ( array[i] == Math.min(...array) ) {
  //   let temp = array[0]
  //   array[0] = array[i]
  //   array[i] = temp
  //   console.log(array);
  // }
  // if ( array[i] == Math.max(...array) ) {
  //   let temp = array[array.length -1]
  //   array[array.length -1] = array[i]
  //   array[i] = temp
  //   console.log(array);
  // }
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ( array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array
}
