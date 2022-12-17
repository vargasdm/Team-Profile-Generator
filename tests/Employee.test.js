const Employee = require('../lib/Employee');

describe('Get', () => {
    it('Get the name of the employee entered by the user', () => {
        const employee = new Employee('Daniel', 1, 'example@gmail.com')
        const result = getName(new Employee('Daniel', 1, 'example@gmail.com'))
      expect(result).toEqual(employee.name);
    });

    it('Get the id of the employee entered by the user', () => {
        const employee = new Employee('Daniel', 1, 'example@gmail.com')
        const result = getid(new Employee('Daniel', 1, 'example@gmail.com'))
      expect(result).toEqual(employee.id);
    });

    it('Get the email of the employee entered by the user', () => {
        const employee = new Employee('Daniel', 1, 'example@gmail.com')
        const result = getid(new Employee('Daniel', 1, 'example@gmail.com'))
      expect(result).toEqual(employee.email);
    });

    it('Get the role of the employee entered by the user', () => {
        const employee = new Employee('Daniel', 1, 'example@gmail.com')
        employee.role = "employee";
        const result = getid();
      expect(result).toEqual(employee.role);
    });
})