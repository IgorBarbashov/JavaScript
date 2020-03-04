// Wrapper
console.log('!!!!!!!!!!!!!!!!!!! Wrapper');
const withDefaultValue = (target, defaultValue = 0) => new Proxy(target, {
    get: (t, p) => (p in t) ? t[p] : defaultValue
});

const position = {
    x: 100,
    y: 100
};
console.log(position.z);

const wrappedPosition = withDefaultValue(position, 90);
console.log(wrappedPosition);
console.log('z = ', wrappedPosition.z);
console.log('nn = ', wrappedPosition.nn);


// Hidden properties
console.log('!!!!!!!!!!!!!!!!!!! Hidden properties');
const withHiddenProps = (target, props) => new Proxy(target, {
    get: (t, p) => props.includes(p) ? 'can\'t read hidden property' : t[p],
    set: (t, p, v) => {
        if (props.includes(p)) {
            console.log('can\'t set value of hidden property');
        } else {
            t[p] = v;
        }
    },
    has: (t, p) => (props.includes(p)) ? false : (p in t),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter(el => !props.includes(el))
});

const obj = {
    name: 'Igor',
    age: 40,
    job: "Frontend"
};

const wrappedObj = withHiddenProps(obj, ['age', 'job']);

console.log(obj);
console.log(wrappedObj);
console.log(wrappedObj.name);
console.log(wrappedObj.age);
console.log(wrappedObj.job);

obj.age = 100;
console.log(obj);

wrappedObj.age = 20;
console.log(obj);

console.log('name' in wrappedObj);
console.log('age' in wrappedObj);
console.log('job' in wrappedObj);
console.log('something' in wrappedObj);


// Hidden properties - 2
console.log('!!!!!!!!!!!!!!!!!!! Hidden properties - 2');
const withHiddenProps2 = (target, prefix) => new Proxy(target, {
    has: (t, p) => (p in t) && !p.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter(el => !el.startsWith(prefix)),
    get: (t, p, reciever) => (p in reciever) ? t[p] : undefined,
});

const obj2 = {
    name: 'Igor',
    age: 40,
    _job: "Frontend"
};

const wrappedObj2 = withHiddenProps2(obj2, '_');

console.log(wrappedObj2);
console.log(wrappedObj2.name);
console.log(wrappedObj2.age);
console.log(wrappedObj2._job);
console.log('_job' in wrappedObj2);
for (let pr in wrappedObj2) {
    console.log('iter:', pr);
}
console.log(Object.keys(wrappedObj2));


// Optimization
console.log('!!!!!!!!!!!!!!!!!!! Optimization');
const userData = [
    {id: 1, name: 'Igor', job: 'Frontend', age: 40},
    {id: 2, name: 'Ivan', job: 'Backend', age: 33},
    {id: 3, name: 'Pavel', job: 'Fullstack', age: 23},
    {id: 4, name: 'Roman', job: 'Balbes', age: 15}
];

const IndexedArray = new Proxy(Array, {
    construct(t, [args]) {
        const index = args.reduce((acc, el, i) => ({...acc, [i + 1]: el }), {});
        return new Proxy (new t(...args), {
            get(arr, prop) {
                switch(prop) {
                    case 'push': {
                        return (item) => {
                            index[item.id] = item;
                            arr[prop].call(arr, item);
                        };
                    }
                    case 'findById': {
                        return (id) => index[id];
                    }
                    default:
                        return arr[prop];
                }
            }
        });
    }
});

const users = new IndexedArray(userData);

console.log(users);
console.log(users[0]);
users.push({id: 99, name: 'Test', job: 'test', age: 99});
console.log(users);
console.log(users.findById(99));