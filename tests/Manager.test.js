const Manager = require('../lib/Manager.js');

describe('Get', () => {
    it('can get name via getName', ()=>{
        const managerName = 'beverly'
        const testManager = new Manager('beverly', 74, 'bev@gmail.com', 224)
        expect(testManager.getName()).toBe(managerName)
     })

    it('can get name via getId', ()=>{
        const managerId = 74
        const testManager = new Manager('beverly', 74, 'bev@gmail.com', 224)
        expect(testManager.getId()).toBe(managerId)
     })

    it('can get name via getEmail', ()=>{
        const managerEmail = 'bev@gmail.com'
        const testManager = new Manager('beverly', 74, 'bev@gmail.com', 224)
        expect(testManager.getEmail()).toBe(managerEmail)
     }) 

    it('can get role via getRole', ()=>{
        const managerRole = 'Manager'
        const testManager = new Manager('beverly', 74, 'bev@gmail.com', 224)
        expect(testManager.getRole()).toBe(managerRole)
     })
})