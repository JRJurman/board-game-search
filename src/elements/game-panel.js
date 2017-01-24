const html = require('choo/html');

module.exports = (state, prev, send) => {
  return (title, image) => {
    return html`
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">${title}</h3>
      </div>
      <div class="panel-body">
        <img src=${image} alt='${title}' />
      </div>
    </div>`
  }
}
