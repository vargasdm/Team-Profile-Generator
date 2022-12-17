class Employee {
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }

    getName() {
      return this.name
    }
    
    getId() {
      return this.id
    }

    getEmail() {
      return this.email
    }

    getRole() {
      return 'Employee'
    }
}

const employee = new Employee('Daniel', 1, 'example@gmail.com');
employee.getName();
employee.getId();
employee.getEmail();
employee.getRole();

module.exports = Employee;