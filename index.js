/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 function createEmployeeRecord(arr){
     return {
         firstName: arr[0],
         familyName: arr[1],
         title: arr[2],
         payPerHour: arr[3],
         timeInEvents: [],
         timeOutEvents: []
     }
 }

 function createEmployeeRecords(arr){
     const records = arr.map(a=>createEmployeeRecord(a))
     return records
 }

 function createTimeInEvent(date){
    const split = date.split(' ')
    const d = split[0]
    const t = parseInt(split[1])
    const timeIn = {
        type: "TimeIn",
        date: d,
        hour: t
    }
    this.timeInEvents.push(timeIn)
    return this
 }

 function createTimeOutEvent(date){
    const split = date.split(' ')
    const d = split[0]
    const t = parseInt(split[1])
    const timeOut = {
        type: "TimeOut",
        date: d,
        hour: t
    }
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(e => e.date === date);
    const timeOut = this.timeOutEvents.find(e => e.date === date);
    const hrs = (timeOut.hour - timeIn.hour)/100
    return hrs
}

function wagesEarnedOnDate(date){
    
    const hrs = hoursWorkedOnDate.call(this, date)
    const wages = this.payPerHour * hrs
    return wages
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstNameString){
    const n = srcArray.find(e => e.firstName = firstNameString)
    return n
}

function calculatePayroll(employees){
    const allWages = employees.map(e => allWagesFor.call(e))
    const reducer = (a, b) => a+b;
    const payRoll = allWages.reduce(reducer, 0)
    return payRoll
}