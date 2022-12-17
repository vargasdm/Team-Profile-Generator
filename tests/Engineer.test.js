const Engineer = require('../lib/Engineer.js');

describe('Get', () => {
    it('can get name via getName', ()=>{
        const engineerName = 'manolo'
        const testEngineer = new Engineer('manolo', 44, 'mon@gmail.com', 'oloman')
        expect(testEngineer.getName()).toBe(engineerName)
     })

    it('can get name via getId', ()=>{
        const engineerId = 44
        const testEngineer = new Engineer('manolo', 44, 'mon@gmail.com', 'oloman')
        expect(testEngineer.getId()).toBe(engineerId)
     })

     it('can get name via getEmail', ()=>{
        const engineerEmail = 'mon@gmail.com'
        const testEngineer = new Engineer('manolo', 44, 'mon@gmail.com', 'oloman')
        expect(testEngineer.getEmail()).toBe(engineerEmail)
     }) 

    it('can get name via getGithub', ()=>{
        const engineerGithub = 'oloman'
        const testEngineer = new Engineer('manolo', 44, 'mon@gmail.com', 'oloman')
        expect(testEngineer.getGithub()).toBe(engineerGithub)
     }) 

    it('can get role via getRole', ()=>{
        const engineerRole = 'Engineer'
        const testEngineer = new Engineer('manolo', 44, 'mon@gmail.com', 'oloman')
        expect(testEngineer.getRole()).toBe(engineerRole)
     })
})