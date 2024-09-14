let latitude = 50
let longitude = 30

let destinationLatitude = 90
let destinationLongitude = 100

distance = Math.sqrt((destinationLatitude - latitude) + (destinationLongitude - longitude))
console.log(`Рассояние составляет: ${distance}`)