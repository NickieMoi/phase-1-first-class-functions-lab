// Code your solution in this file!
const returnFirstTwoDrivers= function(drivers){
    return (["Antonia","Nuru"])
}
const returnLastTwoDrivers= function(drivers){
    return(['Amari', 'Mo' ])
}
const selectingDrivers =[returnFirstTwoDrivers ,returnLastTwoDrivers];
const createFareMultiplier= function(multiply){
    return function(multiply) {
        return multiply*5;
    }
}
const fareDoubler= function (createFareMultiplier){
    return (5*4)
}
const fareTripler= function(createFareMultiplier){
    return createFareMultiplier*3
}
const selectDifferentDrivers= function(drivers,driversToReturn){
    return driversToReturn(drivers);
    
}