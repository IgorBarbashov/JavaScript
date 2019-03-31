'use strict';

function User(fullName) {
    this.fullName = fullName;
}
var vasya = new User('Василий Попкин');

Object.defineProperties(vasya, {
    firstName: {
        get: function() {
            return this.fullName.split(' ')[0];
        },
        set: function(value) {
            this.fullName = value + ' ' + this.lastName;
        }
    },

    lastName: {
        get: function() {
            return this.fullName.split(' ')[1];
        },
        set: function(value) {
            this.fullName = this.firstName + ' ' + value;
        }
    }
});

// чтение firstName/lastName
console.log( vasya.firstName ); // Василий
console.log( vasya.lastName ); // Попкин

// запись в lastName
vasya.lastName = 'Сидоров';

console.log( vasya.fullName ); // Василий Сидоров