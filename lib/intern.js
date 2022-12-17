const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;

    }

    getSchool() {
      return this.school
    }

    getRole() {
        return 'Intern'
    }
}

const intern = new Intern('Daniel', 1, 'example@gmail.com', 'UNC');
intern.getName();
intern.getId();
intern.getEmail();
intern.getSchool();
intern.getRole();

module.exports = Intern;