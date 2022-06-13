// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
    return drivers.slice (0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice (-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function fareMultiplier(fare) {
        return num * fare;
    }
}


const fareDoubler = function createFareMultiplier(fare) {
    return fare * 2;
}

const fareTripler = function createFareMultiplier (fare) {selectDifferentDrivers
    return fare * 3;
}

function selectDifferentDrivers (drivers, selectingDrivers) {
    
    if (selectingDrivers === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else {
       return returnLastTwoDrivers(drivers);
    }
}
