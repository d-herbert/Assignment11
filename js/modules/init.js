export function init() {
    // display command menu
    console.log('the employee management application')
    console.log('-------------------------------------')  
    // start with empty array
    let arrEmployees = []
    // fetch json data using promises
    fetch('../data/employees.json')
        .then( response => response.json() )
        .then( data =>  {
            // console.log(data.employees[0].ID)
            for (let employee of data.employees) {
                arrEmployees.push([`${employee.ID}, ${employee.Name}, ${employee.Ext}, ${employee.Email}, ${employee.Department}`])
            }
        })
        .catch( error => console.log(error.message))
    console.log(arrEmployees)
    return arrEmployees
}

init()
