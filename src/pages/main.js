const html = require('choo/html');

const searchElement = require('../elements/search');

const searchContainerStyle = `
  margin: 2em;
`

module.exports = (state, prev, send) => {
  const search = searchElement.bind(this, state, prev, send);
  return html`
  <div>
    <div style=${searchContainerStyle}>
      ${search()}
    </div>
  </div>`
}
