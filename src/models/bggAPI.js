const fetch = require('isomorphic-fetch');
const xhr = require('xhr');

const api = {
  state: {
    search: ''
  },
  reducers: {
    updateSearch: (state, search) => {
      console.log(search);
      return Object.assign({}, state, {search});
    }
  },
  effects: {
    fetchGames: (state, data, send, done) => {
      // fetch(`https://www.boardgamegeek.com/xmlapi/search?search=${encodeURI(state.search)}`,
      // {
      //   mode: 'no-cors',
      //   method: 'GET',
      //   headers: {
      //     'Accept': 'application/xml'
      //   }
      // })
      //   .then(function(res) {
      //     return res.text()
      //   })
      //   .then(function(searchResultsXML) {
      //     console.log(searchResultsXML);
      //     done();
      //   });
      xhr.get(`https://www.boardgamegeek.com/xmlapi/search?search=${encodeURI(state.search)}`,
        { headers: {'Access-Control-Allow-Origin': '*'} },
        (err, res) => {
          console.log(res);
          done();
        }
      );
    }
  }
};

const actionList = Object.keys(api.reducers).concat(Object.keys(api.effects));
const actions = actionList.reduce((actionObject, action) => {
  const newAction = {};
  newAction[action] = action;
  return Object.assign({}, actionObject, newAction);
}, {});

module.exports = {
  state: api.state,
  reducers: api.reducers,
  effects: api.effects,
  actions: actions
}
