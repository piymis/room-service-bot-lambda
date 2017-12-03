function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


function fulfillBookCar() {
    const cabs = require('./data/cabs');
    var chosenCab = cabs.cabs[getRandomInt(0, cabs.cabs.length)];
    return {
        vehicleNumber: chosenCab.vehicleNumber,
        driverName: chosenCab.driverName,
		    contact: chosenCab.contact
    }
    
};




module.exports = {
  fulfillBookCar: fulfillBookCar
};