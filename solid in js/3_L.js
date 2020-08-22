// Liskov Substitution Principle

class Person {
  access() {
    console.log('У тебя есть доступ');
  }
}
class Frontend extends Person {
  canCreateFrontend() {};
}
class Backend extends Person {
  canCreateBackend() {};
}
class Konkurent extends Person {
  access() {
    throw new Error('No acess');
  }
}
function openDoor(person) {
  // эта функия нарушает принци LSP, т.к. не умеет работать
  // со всеми производными от Person сущностями
  // надо ввести новый уровень абстракции - см. пример ниже
  person.access();
}

// с новым уровнем абстракции
class Person1 {
}
class Member extends Person1 {
  access() {
    console.log('У тебя есть доступ');
  }
}
class Guest extends Person1 {
  isGuest  = true;
}
class Frontend1 extends Member {
  canCreateFrontend() {};
}
class Backend1 extends Member {
  canCreateBackend() {};
}
class Konkurent1 extends Guest {
}
function openDoor(member) {
  member.access();
}
openDoor(new Frontend1());
openDoor(new Backend1());
// этого мы уже не можем написать, т.к.
// Konkurent1 не является инстансом класса Member
// если бы все это было протипизировано - была бы ошибка на 
// этапе компиляции
// openDoor(new Konkurent1()); 


// ***********************************************

class Component {
  render() {
    return `<div>Component</div>`;
  }
}
class HeaderComponent extends Component {
  onInit() {};
}
class FooterComponent extends Component {
  afterInit() {};
}
class HOC extends Component {
  render() {
    throw new Error('Render impossible');
  }
  wrap(component) {
    component.wrapped = true;
    return component;
  }
}
function renderComponent(component) {
  // здесь тоже идет нарушение LSP, т.к. у НОС нет метода render
  // опять же надо вводить новый уровень абстракции - см. ниже
  console.log(component.render());
}
renderComponent(new HeaderComponent());
renderComponent(new FooterComponent());
renderComponent(new HOC());

// с новым уровнем абстракции
class Component1 {
}
class FunctionalComponent extends Component1 {
  render() {
    return `<div>Component</div>`;
  }
}
class HightOrderComponent extends Component1 {
  // no render() implementation
}
class HeaderComponent1 extends FunctionalComponent {
  onInit() {};
}
class FooterComponent1 extends FunctionalComponent {
  afterInit() {};
}
class HOC1 extends HightOrderComponent {
  wrap(component) {
    component.wrapped = true;
    return component;
  }
}
function renderComponent(functionalComponent) {
  console.log(functionalComponent.render());
}
renderComponent(new HeaderComponent1());
renderComponent(new FooterComponent1());
// не можем передать в функцию т.к. она умеет работать
// только с FunctionalComponent или его производными
// renderComponent(new HOC());
