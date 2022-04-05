const Employee = require('./employee');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole () {
        return 'Manager';
    }
};


/*Exports this to the index*/

module.exports = Manager;