const html = require('choo/html');

const headerElement = require('../elements/header');

module.exports = (state, prev, send) => {
  const header = headerElement.bind(state, prev, send)
  return html`
  <div>
    ${header()}
  </div>`
}
