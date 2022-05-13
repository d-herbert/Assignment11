// function init() {
//     // display command menu
//     console.log('the employee management application')
//     console.log('-------------------------------------')  
//     // start with empty array
//     let arrEmployees = []
//     // fetch json data using promises
//     fetch('../data/employees.json')
//         .then( response => response.json() )
//         .then( data =>  {
//             for (let employee of data.employees) {
//                 arrEmployees.push([`${employee.ID}, ${employee.Name}, ${employee.Ext}, ${employee.Email}, ${employee.Department}`])
//             }
//         })
//         .catch( error => console.log(error.message))
// }

function init() {
    // display command menu
    console.log('the employee management application')
    console.log('-------------------------------------')  
    // start with empty array
    let arrEmployees = []
    // fetch json data using async/await
    async function fetchUsers() {
        try {
            const response = await fetch('../data/employees.json')
            const employees = await response.json()
            for (let employee of employees) {
                document.body.innerHTML += `${employee.Name}<br>`
                arrEmployees.push([`${employee.ID}, ${employee.Name}, ${employee.Ext}, ${employee.Email}, ${employee.Department}`])
            }
            console.log(arrEmployees)
            return arrEmployees
        } catch (error) {
            console.log(error)
        }
    }
    fetchUsers()
}

init()