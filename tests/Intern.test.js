const Intern = require('../lib/Intern.js');

describe('Get', () => {
    it('can get name via getName', ()=>{
        const internName = 'pepe'
        const testIntern = new Intern('pepe', 100, 'pepehands@gmail.com', 'UP')
        expect(testIntern.getName()).toBe(internName)
     })

    it('can get name via getId', ()=>{
        const internId = 100
        const testIntern = new Intern('pepe', 100, 'pepehands@gmail.com', 'UP')
        expect(testIntern.getId()).toBe(internId)
     })

     it('can get name via getEmail', ()=>{
        const internEmail = 'pepehands@gmail.com'
        const testIntern = new Intern('pepe', 100, 'pepehands@gmail.com', 'UP')
        expect(testIntern.getEmail()).toBe(internEmail)
     }) 

    it('can get name via getSchool', ()=>{
        const internGithub = 'UP'
        const testIntern = new Intern('pepe', 100, 'pepehands@gmail.com', 'UP')
        expect(testIntern.getSchool()).toBe(internGithub)
     }) 

    it('can get role via getRole', ()=>{
        const internRole = 'Intern'
        const testIntern = new Intern('pepe', 100, 'pepehands@gmail.com', 'UP')
        expect(testIntern.getRole()).toBe(internRole)
     })
})