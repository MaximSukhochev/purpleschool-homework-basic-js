let latitude = 50;
let longitude = 30;

let destinationLatitude = 90;
let destinationLongitude = 100;

distance = Math.sqrt((destinationLatitude - latitude) ** 2 + (destinationLongitude - longitude) ** 2);
console.log(`Рассояние составляет: ${distance}`);