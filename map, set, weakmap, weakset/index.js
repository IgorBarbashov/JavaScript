const obj = {
    name: 'Igor',
    age: 40,
    job: 'Front',
}

const entries = [
    ['name', 'Igor'],
    ['age', 40],
    ['job', 'Front'],
]

const map = new Map(entries);

map
    .set(5, 7)
    .set(obj, 'object')
    .set(NaN, 'NaN')

map.delete('job');

console.log(map.has('job'));
console.log(map.size);

map.clear();
console.log(map);
