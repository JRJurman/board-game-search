const html = require('choo/html');

const footerStyle = `
  text-align: center;
  color: white;
  background: #454545;
  padding: 0.25em;
  width: 100%;
`

module.exports = (state, prev, send) => {
  return html`
  <footer style=${footerStyle}>
    <h5>Created By Jesse Jurman</h5>
  </div>`
}
