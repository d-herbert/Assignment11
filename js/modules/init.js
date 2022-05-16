function init() {
    // display command menu
    console.log('the employee management application')
    console.log('-------------------------------------')  
    // start with empty array
    let arrEmployees = []
    // fetch json data using promises
    async function fetchUsers() {
        try {
            const response = await fetch('../data/employees.json')
            const users = await response.json()
            for (let i=0; i < users['employees'].length; i++) {
                arrEmployees.push([`${users['employees'][i]['ID']}`, `${users['employees'][i]['Name']}`, `${users['employees'][i]['Email']}`, `${users['employees'][i]['Department']}`])
            }
        do {
            buildGrid(arrEmployees)
            break
        } while (true)
        } catch (error) {
        console.error(error)
        }
    }
    fetchUsers()
}

init()
