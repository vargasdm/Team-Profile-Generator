const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;

    }

    getGithub() {
      return this.github
    }

    getRole() {
        return 'Engineer'
    }
}

const engineer = new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm');
engineer.getName();
engineer.getId();
engineer.getEmail();
engineer.getGithub();
engineer.getRole();

module.exports = Engineer;