const Employee = require('../lib/Employee.js');

describe('Get', () => {
    it('can get name via getName', ()=>{
        const employeeName = 'fred'
        const testEmployee = new Employee('fred', 12, 'fred@gmail.com')
        expect(testEmployee.getName()).toBe(employeeName)
     })

    it('can get name via getId', ()=>{
        const employeeId = 12
        const testEmployee = new Employee('fred', 12, 'fred@gmail.com')
        expect(testEmployee.getId()).toBe(employeeId)
     })

    it('can get email via getEmail', ()=>{
        const employeeEmail = 'fred@gmail.com'
        const testEmployee = new Employee('fred', 12, 'fred@gmail.com')
        expect(testEmployee.getEmail()).toBe(employeeEmail)
     })

    it('can get role via getRole', ()=>{
        const employeeRole = 'Employee'
        const testEmployee = new Employee('fred', 12, 'fred@gmail.com')
        expect(testEmployee.getRole()).toBe(employeeRole)
     })
})