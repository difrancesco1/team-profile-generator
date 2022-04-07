const Employee = require('../lib/employee');


/*employee object*/
test('test to create new employee object', () => {
    const employee = new Employee('Josh', 18, 'jdifer1@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

/*employee name from getName*/
test('test to get employee name', () => {
    const employee = new Employee('Alex', 40, 'AlexMass@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

/*employee id from getId*/
test('test to get employee id', () => {
    const employee = new Employee('Gui', 20, 'gui321@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

/*employee email from getEmail*/
test('test to get employee email', () => {
    const employee = new Employee('Shae', 20, 'Shaelon@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

/*employee role from getRole*/
test('test to get the role of the employee', () => {
    const employee = new Employee('Linh', 20, 'Linhhhr@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});