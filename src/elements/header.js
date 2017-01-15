const html = require('choo/html');

const headerStyle = `
  text-align: center;
  color: white;
  background: #454545;
  padding: 1em;
`

module.exports = (state, prev, send) => {
  return html`
  <div style=${headerStyle}>
    <h1>Board Game Search</h1>
  </div>`
}
