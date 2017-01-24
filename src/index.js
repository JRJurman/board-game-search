const choo = require('choo');
const html = require('choo/html');
const app = choo();

const chrome = require('./pages/chrome');
const main = require('./pages/main');

const api = require('./models/bggAPI');

app.model(api);

app.router([
  ['/', chrome.bind(this, main)],
]);

const tree = app.start();
document.body.appendChild(tree);
