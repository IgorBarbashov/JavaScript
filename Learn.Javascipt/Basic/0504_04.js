var users = [{
    name: "Вася",
    surname: 'Иванов',
    age: 20
  }, {
    name: "Петя",
    surname: 'Чапаев',
    age: 25
  }, {
    name: "Маша",
    surname: 'Медведева',
    age: 18
  }];

users.sort(byField('name'));
users.forEach(function(user) {
    alert( user.name );
}); // Вася, Маша, Петя
  
users.sort(byField('age'));
users.forEach(function(user) {
    alert( user.name );
    }); // Маша, Вася, Петя

users.sort(byField('surname'));
users.forEach(function(user) {
    alert( user.name );
}); // Маша, Вася, Петя

function byField(name) {
    return function(a, b) {
        return a[name] > b[name] ? 1 : -1;
    }
}