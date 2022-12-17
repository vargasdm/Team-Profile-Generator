const Intern = require('../lib/Intern.js');

describe('Get', () => {
    it('Get the name of the intern entered by the user', () => {
        const intern = new Intern('Daniel', 1, 'example@gmail.com', 'UNC');
        const result = getName(new Intern('Daniel', 1, 'example@gmail.com', 'UNC'));
      expect(result).toEqual(intern.name);
    });

    it('Get the id of the intern entered by the user', () => {
        const intern = new Intern('Daniel', 1, 'example@gmail.com', 'UNC');
        const result = getid(new Intern('Daniel', 1, 'example@gmail.com', 'UNC'));
      expect(result).toEqual(intern.id);
    });

    it('Get the email of the intern entered by the user', () => {
        const intern = new Intern('Daniel', 1, 'example@gmail.com', 'UNC');
        const result = getemail(new Intern('Daniel', 1, 'example@gmail.com', 'UNC'));
      expect(result).toEqual(intern.email);
    });

    it('Get the school of the intern entered by the user', () => {
        const intern = new Intern('Daniel', 1, 'example@gmail.com', 'UNC');
        const result = getSchool(new Intern('Daniel', 1, 'example@gmail.com', 'UNC'));
      expect(result.school).toEqual(intern.school);
    });

    it('Get the role of the intern entered by the user', () => {
        const intern = new Intern('Daniel', 1, 'example@gmail.com', 'UNC')
        intern.role = "Intern";
        const result = getRole();
      expect(result).toEqual(intern.role);
    });
})