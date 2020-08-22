// Single Responsibility Principle

class News {
  // без методов, отвечающих за отбражение это класс обладает
  // single responsibility - отвечает за логику

  constructor(title, text) {
    this.title = title;
    this.text = text;
    this.modified = false;
  }

  update(text) {
    this.text = text;
    this.modified = true;
  }

  // эти методы уже нарушают прицип SRP, т.к. отвечают не за
  // формирование или изменение самой новости, а уже за отображение.
  // их надо реализовывать в другом классе
  // toHTML() {
  //   return `
  //     <div>
  //       <h1>${this.title}</h1>
  //       <p>${this.text}</p>
  //     </div>
  //   `;
  // }
  // toJSON() {
  //   return JSON.stringify({
  //     title: this.title,
  //     text: this.text,
  //     modified: this.modified,
  //   }, null, 2);
  // }
}

class NewsPrinter {
  // этот класс тоже обладает single responsibility -
  // он отвечает за отображение и если у нас появляется
  // новый формат отображения - то мы расширяем именно
  // этот класс не трогая логику (например xml())

  constructor(news) {
    this.news = news;
  }

  html() {
    return `
      <div>
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `;
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified,
    }, null, 2);
  }

  xml() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `;
  }
}

const news = new News('Лето', 'Аномальная жара');
const newsPrinter = new NewsPrinter(news);

console.log(newsPrinter.html());
console.log(newsPrinter.json());
console.log(newsPrinter.xml());
