// https://learn.javascript.ru/static-properties-and-methods
'use strict';

function Article() {
    this.created = new Date();
    
    Article.count++;
    Article.lastDate = this.created;
};
Article.count = 0;

Article.showStats = function() {
    console.log('Всего: ' + this.count + ', Последнаая: ' + this.lastDate);
};

new Article();
new Article();
Article.showStats();
new Article();
Article.showStats();