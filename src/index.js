const choo = require('choo');
const html = require('choo/html');
const app = choo();

app.router([
  ['/', require('./pages/chrome')]
]);

const tree = app.start();
document.body.appendChild(tree);