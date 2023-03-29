// Write your solution in this file!
const employee = {
    name: "Ryan",
    streetAddress: "14 Fairways",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee }
    newObj[key] = value
    return newObj
}
updateEmployeeWithKeyAndValue(employee, "sam", "1")

function deleteFromEmployeeByKey(employee, key){
    const remEmployee = { ...employee }
    let name = key
    let newEmployee = delete remEmployee[name]
    return {newEmployee}
}

deleteFromEmployeeByKey(employee, "Kimani")

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}
