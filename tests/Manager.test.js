const Manager = require('../lib/Manager.js');

describe('Get', () => {
    it('Get the name of the manager entered by the user', () => {
        const manager = new Manager('Daniel', 1, 'example@gmail.com', 3);
        const result = getName(new Manager('Daniel', 1, 'example@gmail.com', 3));
      expect(result).toEqual(manager.name);
    });

    it('Get the id of the manager entered by the user', () => {
        const manager = new Manager('Daniel', 1, 'example@gmail.com', 3);
        const result = getid(new Manager('Daniel', 1, 'example@gmail.com', 3));
      expect(result).toEqual(manager.id);
    });

    it('Get the email of the manager entered by the user', () => {
        const manager = new Manager('Daniel', 1, 'example@gmail.com', 3);
        const result = getemail(new Manager('Daniel', 1, 'example@gmail.com', 3));
      expect(result).toEqual(manager.email);
    });

    // it('Get the office number of the manager entered by the user', () => {
    //     const manager = new Manager('Daniel', 1, 'example@gmail.com', 3);
    //     const result = new Manager('Sam', 1, 'example2@gmail.com', 3);
    //   expect(result.officeNumber).toEqual(manager.officeNumber);
    // });

    it('Get the role of the manager entered by the user', () => {
        const manager = new Manager('Daniel', 1, 'example@gmail.com', 3)
        manager.role = "Manager";
        const result = getRole();
      expect(result).toEqual(manager.role);
    });
})