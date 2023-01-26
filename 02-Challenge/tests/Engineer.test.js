const Engineer = require("../lib/Engineer")


describe('Engineer', () => {
    describe('Creation of new engineer', () =>
    {
        it('Should return a new engineer github username using a string', () => {
            const engineer = new Engineer('Kevin', 18, 'khernandez0810@gmail.com', 'khernandez0810')
            expect(engineer.github).toEqual(expect.any(String));

        })
    })
    describe('getGithub()', () =>
    {
        it('Should return github username from the getGithub() function', () => {
            const testGithub = "khernandez0810"
            const engineer = new Engineer('Kevin', 18, 'khernandez0810@gmail.com', testGithub)
            expect(engineer.getGithub()).toEqual(testGithub);
            
        })
    })
    describe('getRole()', () =>
    {
        it('Should return role of engineer with getRole() function', () => {
            const engineer = new Engineer('Kevin', 18, 'khernandez0810@gmail.com', 'khernandez0810')
            expect(engineer.getRole()).toEqual("Engineer");
            
        })
    })
})