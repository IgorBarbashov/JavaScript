// Dependency Inversion Principle

// 1 - есть функционал, который получает данные из БД
class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json);
    return Promise.resolve('Data from fetch');
  }
}
class DataBase {
  constructor() {
    this.fetch = new Fetch();
  }
  getData() {
    return this.fetch.request('vk.vom');
  }
}
const db = new DataBase();
console.log(db.getData());

// 2 - приходит заказчик и говорит, что теперь получаем данные из localStorage
// мы идем и переписываем функционал, заточенный под db
// class Fetch {
//   request(url) {
//     // return fetch(url).then(r => r.json);
//     return Promise.resolve('Data from fetch');
//   }
// }
class LocalStorage {
  get(key) {
    // return localStorage.get(key);
    return 'Data from localStorage';
  }
}
class DataBase {
  constructor() {
    // this.fetch = new Fetch();
    this.LocalStorage = new LocalStorage();
  }
  getData() {
    // return this.fetch.request('vk.vom');
    return this.LocalStorage.get('some ls key');
  }
}
const db = new DataBase();
console.log(db.getData());

// 3 - класс DataBase нарушает принцип DIP, т.к. зависит от 
// конкретных реализаций некоторых его методов, т.о. мы
// возвращаемся к его переписке

// 4 - исправляем. вводим новый уровень абстракции - Client.
// эти классы ...Client всегда имеют метод clientGet().
// и мы убираем зависимости в эти промежуточные классы
// а из нашего целевого класса DataBase их убираем
class Fetch {
  // остался как был
  request(url) {
    return Promise.resolve('Data from fetch');
  }
}
class FetchClient {
  // содержит в себе зависимость и имеет метод clientGet()
  constructor() {
    this.fetch = new Fetch();
  }
  clientGet(url) {
    return this.fetch.request(url);
  }
}
class LocalStorage {
  // остался как был
  get(key) {
    return 'Data from localStorage';
  }
}
class LocalStorageClient {
  // содержит в себе зависимость и имеет метод clientGet()
  constructor() {
    this.localStorage = new LocalStorage();
  }
  clientGet(key) {
    return this.localStorage.get(key);
  }
}
class DataBase {
  // теперь нам не надо переписывать класс DataBase при
  // изменении его зависимостей, т.к. мы их перенесли отсюда
  // в другие классы
  constructor(client) {
    this.client = client;
  }
  getData(identifier) {
    return this.client.clientGet(identifier);
  }
}
const dbFetch = new DataBase(new FetchClient());
console.log(dbFetch.getData('vk.com'));

const dbLocalStorage = new DataBase(new LocalStorageClient());
console.log(dbLocalStorage.getData('ls key'));