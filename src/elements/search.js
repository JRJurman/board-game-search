const html = require('choo/html');

const { actions } = require('../models/bggAPI');

const containerStyle = `
  display: flex;
`

const formStyle = `
  margin: inherit;
  margin-right: 1em;
  flex: 1;
`

module.exports = (state, prev, send) => {
  const onSubmit = (event) => {
    console.log(event.target.children[0].value)
    send(actions.fetchGames, event.target.children[0]);
    event.preventDefault();
  }

  const onUpdateSearch = (event) => {
    console.log(event.target.value)
    send(actions.updateSearch, event.target.value);
  }

  return html`
  <div style=${containerStyle}>
    <form style=${formStyle} onsubmit=${onSubmit}>
      <input  class="form-control"
              type="text"
              placeholder="Board Game Name"
              onchange=${onUpdateSearch} />
    </form>
    <a href="#" class="btn btn-primary">Search</a>
  </div>`
}
