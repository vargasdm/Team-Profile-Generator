const Employee = require('./employee');

class Engineer extends Employee {
    constructor(github) {
      this.github = github;

    }

    getGithub() {

    }

    getRole() {
        
    }
}

module.exports = {
    Engineer};