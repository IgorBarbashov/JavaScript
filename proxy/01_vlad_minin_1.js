// Proxy Object
const person = {
    name: 'Igor',
    age: 40,
    job: 'Frontend'
};

const op = new Proxy(person, {
    get(target, prop) {
        console.log('---> in get');
        return target[prop];
    },
    set(target, prop, value) {
        console.log('---> in set');
        if (prop in target) {
            target[prop] = value;
        } else {
            throw new Error(`No ${prop} in ${target}.`);
        }
    },
    has(target, prop) {
        console.log('---> in has');
        return Object.keys(target).filter(el => el !== 'name').includes(prop);
    },
    deleteProperty(target, prop) {
        console.log('---> in deleteProperty');
        delete target[prop];
        return true;
    }
});

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Proxy Object');
op.name;
op.name = 8;
// op.surname = 8; // will throw Error
console.log('name' in op);
console.log('age' in op);
delete op.job;
console.log(op);


// Proxy Function
const log = text => `Log: ${text}`;

const fp = new Proxy(log, {
    apply(target, thisArg, args) {
        console.log('target:', target);
        console.log('thisArg:', thisArg);
        console.log('args:', args);
        
        return target.apply(thisArg, args).toUpperCase();
    }
});

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Proxy Function');
console.log(log('123'));
console.log('--------');
console.log(fp('hello'));
console.log('--------');
console.log(fp.apply({jj:'kk'}, [1, 2, 3, 4]));


// Proxy Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const PersonProxy = new Proxy(Person,{
    construct(target, args) {
        console.log('in construct');
        return new Proxy(new target(...args), {
            get(t, p) {
                console.log(`!!! get ${p} in ${t}`);
                return t[p];
            }
        });
    }
});

console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Proxy Class');
const pp = new PersonProxy('Igor', 40);
console.log(pp);
console.log(pp.name);