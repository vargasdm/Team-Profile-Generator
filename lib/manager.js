const Employee = require('./Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return 'Manager'
  }
}

const manager = new Manager('Daniel', 1, 'example@gmail.com', 3);
manager.getName();
manager.getId();
manager.getEmail();
manager.getRole();

module.exports = Manager;