const Manager = require("../lib/Manager")




describe('Manager', () => {
    describe('Creation of Manager object as a number', () => {
        it('should return creation of manager object using office number ', () => {
            const testManager = new Manager("Kevin", 18, "khernandez0810@gmail.com", 7)
            expect(testManager.officeNumber).toEqual(expect.any(Number))
        })
    })
    describe('getRole()', () => {
        it('should return role from manager object as "Manager" ', () => {
            const testManager = new Manager("Kevin", 18, "khernandez0810@gmail.com", 7)
            expect(testManager.getRole()).toEqual("Manager")
        })
    })
})