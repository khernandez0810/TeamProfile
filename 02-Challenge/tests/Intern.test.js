
const Intern = require("../lib/Intern")


describe('Intern', () => {
    describe('Creation of new intern', () =>
    {
        it('Should return a new Intern school as a string', () => {
            const intern = new Intern('Kevin', 18, 'khernandez0810@gmail.com', "University of Central Florida")
            expect(intern.school).toEqual(expect.any(String));

        })
    })

    })
    describe('getRole()', () =>
    {
        it('Should return role of engineer with getRole() function', () => {
            const testSchool = "University of Central Florida";
            const intern = new Intern('Kevin', 18, 'khernandez0810@gmail.com', testSchool)
            expect(intern.getRole()).toBe("Intern");
            
        })
    })
