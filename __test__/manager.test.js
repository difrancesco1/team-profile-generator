const Manager = require('../lib/manager');

/*Test to create a new manager object*/
test('test to create a manager object', () => {
    const manager = new Manager('Alex', 34, 'alexmmm1@gmail.com, 10');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

/*Test to get the manager role from getRole*/
test('test to get employee role', () => {
    const manager = new Manager('Linh', 40, '40Linh41@gmail.com, 10');

    expect(manager.getRole()).toEqual('Manager');
});