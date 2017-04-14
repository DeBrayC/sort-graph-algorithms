function closestPair(points) {

  const xCoordinates = []
  const yCoordinates = []
  const xDifferences = []
  const yDifferences = []
  const newArray = []

  for ( let i = 0; i < points.length; i++ ) {
      xCoordinates.push(points[i][0])
      yCoordinates.push(points[i][1])

  }

 let xResult = []
 let yResult = []

 for(let i = 0; i < xCoordinates.length; i++) {
   let xDifferences = []
  xResult.push([i])
   for(let j = 0; j< xCoordinates.length; j++) {
     if(i !== j) {
       let xDifference = Math.abs(xCoordinates[i] - xCoordinates[j])
       xDifferences.push(xDifference)
     }
   }
  xResult[i].push(xDifferences)
 }
  for(let i = 0; i < yCoordinates.length; i++) {
   let yDifferences = []
  yResult.push([i])
   for(let j = 0; j< yCoordinates.length; j++) {
     if(i !== j) {
       let yDifference = Math.abs(yCoordinates[i] - yCoordinates[j])
       yDifferences.push(yDifference)
     }
   }
   yResult[i].push(yDifferences)
 }

for ( let i = 0; i < xResult.length; i++)  {
  for ( let j = 1; j < xDifferences.length; j) {
    for ( let k = 0; k < xDifference.length; k++) {

  newArray.push(xDifference[k] + yDifference[k])

    }
  }
}


}

closestPair(points = [
  [2,1],
  [4,0],
  [-1,0],
  [5,3],
  [-2,5],
  [3,-3],
  [-2,0],
  [3,4],
  [5,-4],
  [0,-2]])
