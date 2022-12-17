const Engineer = require('../lib/Engineer.js');

describe('Get', () => {
    it('Get the name of the engineer entered by the user', () => {
        const engineer = new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm');
        const result = getName(new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm'));
      expect(result).toEqual(engineer.name);
    });

    it('Get the id of the engineer entered by the user', () => {
        const engineer = new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm');
        const result = getid(new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm'));
      expect(result).toEqual(engineer.id);
    });

    it('Get the email of the engineer entered by the user', () => {
        const engineer = new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm');
        const result = getemail(new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm'));
      expect(result).toEqual(engineer.email);
    });

    it('Get the github of the engineer entered by the user', () => {
        const engineer = new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm');
        const result = getGithub(new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm'));
      expect(result.github).toEqual(engineer.github);
    });

    it('Get the role of the engineer entered by the user', () => {
        const engineer = new Engineer('Daniel', 1, 'example@gmail.com', 'vargasdm')
        engineer.role = "Engineer";
        const result = getRole();
      expect(result).toEqual(engineer.role);
    });
})