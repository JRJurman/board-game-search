const html = require('choo/html');
const chroma = require('chroma-js');

const headerElement = require('../elements/header');
const footerElement = require('../elements/footer');
const noop = ()=>{};

const pageBackgroundColor = chroma('slategray').hex();
const bodyBackgroundColor = chroma(pageBackgroundColor).darken().hex()

const bodyStyle = `
  background: ${bodyBackgroundColor};
`

const chromeStyle = `
  margin: auto;
  max-width: 600px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const pageStyle = `
  height: 100%;
  background: ${pageBackgroundColor};
`

module.exports = (pageElement, state, prev, send) => {
  const header = headerElement.bind(this, state, prev, send);
  const footer = footerElement.bind(this, state, prev, send);
  const page = pageElement ? pageElement.bind(this, state, prev, send) : noop;

  return html`
  <div style=${bodyStyle}>
    <div style=${chromeStyle}>
      ${header()}
      <div style=${pageStyle}>
        ${page()}
      </div>
      ${footer()}
    </div>
  </div>`
}
