const Engineer = require('../lib/engineer');

/*Creates an engineer object*/
test('test to create a new engineer object', () => {
    const engineer = new Engineer('Linh', 50, 'Linh11');

    expect(engineer.github).toEqual(expect.any(String));
});

/*gets Github username*/
test('test to get github username', () => {
    const engineer = new Engineer('Josh', 20, 'Joshdd');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});


/*Gets role*/
test('test to get employee role', () => {
    const engineer = new Engineer('Alex', 20, 'AlexM2');
    
    expect(engineer.getRole()).toEqual('Engineer');
});