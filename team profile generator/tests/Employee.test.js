const Employee = require("../lib/Employee");



describe('Employee', () => {
    describe('create employee object', () => {
        it('Should accept a string for name and email, accept number as employee ID', () => { 
            const employee = new Employee('Kevin', 18, 'khernandez0810@gmail.com');
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
})

describe('getRole()', () =>{
    describe('Returns employee role from Employee', () => {
        it('should return role of new employee', () => {
            const testRole = "Employee"
            const employee = new Employee('Kevin', 18, testRole);
            expect(employee.getRole()).toEqual(testRole);
        });
    });
});
describe('getName()', () =>{
    describe('Returns employee name from getName()', () => {
        it('should return role of new employee as a string', () => {
            const testName = "Kevin"
            const employee = new Employee(testName, 18, 'khernandez0810@gmail.com');
            expect(employee.getName()).toEqual(testName);
        });
    });
});
describe('getID()', () =>{
    describe('Returns employee ID from getID()', () => {
        it('should return employee ID as a number', () => {
            const testID = 18
            const employee = new Employee('Kevin',testID, 'khernandez0810@gmail.com')
            
            expect(employee.getId()).toEqual(testID);
        });
    });
});
describe('getEmail()', () =>{
    describe('Returns email from getEmail()', () => {
        it('should return email of new employee as a string', () => {
            const testEmail = 'khernandez0810@gmail.com';
            const employee = new Employee('Kevin', 18, testEmail);
            expect(employee.getEmail()).toEqual(testEmail);
        });
    });
});

});
