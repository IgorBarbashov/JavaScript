const person = Object.create(
    {
        calculateAge() {
            console.log('age:', this.age);
        }
    },
    {
    name: {
        value: 'Igor',
        enumerable: true,
        writable: true,
        configurable: true,
    },
    age: {
        value: 40,
    },
    birthYear: {
        get() {
            return new Date().getFullYear() - this.age;

        },
        set(value) {
            document.body.style.background = 'red';
            console.log('set birthYear:', value);
            this.age = value - new Date().getFullYear();
        }
    }
});

console.log(person);

person.name = 'Ira';

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key:', key, person[key]);
    }
}

console.log(person);

delete person.name;
delete person.age;

console.log(person);

console.log(person.birthYear);
person.birthYear = 1970;
console.log(person.birthYear);

person.calculateAge();