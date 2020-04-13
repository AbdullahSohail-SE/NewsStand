const state = {
  notifications: [],
  readingList: [],
  topAroundTheGlobe: [],
  topInRegions: {
    asia: [],
    europe: [],
    africa: []
  },
  coronaLatest: []
}

const mutations = {
  'setTopAroundTheGlobe'(state, payload) {
    state.topAroundTheGlobe.push(...payload);
  },
  'setTopInRegions'(state, payload) {

    state.topInRegions[payload.region].push(...knuthShuffle(payload.data));

  },
  'setCoronaLatest'(state, payload) {
    state.coronaLatest.push(...knuthShuffle(payload));
  },
  'setNotifications'(state, payload) {

  },
  'addReadLater'(state, payload) {

  },
  'deleteReadLater'(state, payload) {

  }
};

const getters = {
  'getNotifications'(state, getters) {

  },
  'getTopAroundTheGlobe'(state, getters) {
    return state.topAroundTheGlobe;
  },
  'getNumberReadingList'(state, getters) {

  },
  'getNumberNotifications'(state, getters) {

  },
  'getCoronaLatest'(state, getters) {
    return state.coronaLatest;
  },
  'getAsiaLatest'(state, getters) {

    return state.topInRegions.asia;
  },
  'getEuropeLatest'(state, getters) {
    return state.topInRegions.europe;
  },
  'getAfricaLatest'(state, getters) {
    return state.topInRegions.africa;
  }
};

const actions = {
  AddToReadingList: (store, payload) => {

  },
  LoadTopAroundTheGlobe({
    commit,
    getters
  }, payload) {

    const fetchEnglishSources = () => {
      return this._vm.$axios.get('/sources', {
          params: {
            language: 'en'
          }
        })
        .then(response => response.data.sources.map(source => source.id))
    }
    const populateTopAroundTheGlobe = (sources) => {
      this._vm.$axios.get('/top-headlines', {
          params: {
            sources: sources.join(',')
          }
        })
        .then(response => commit('setTopAroundTheGlobe', response.data.articles))
    }

    fetchEnglishSources().then(populateTopAroundTheGlobe);

  },
  LoadCoronaLatest({
    commit,
    getters
  }, payload) {

    this._vm.$axios.get('/everything', {
        params: {
          q: 'coronavirus',
          sortBy: 'popularity',
          language: 'en'
        }
      })
      .then((response) => {
        commit('setCoronaLatest', response.data.articles);
      })

  },
  LoadRegionsLatest({
    commit,
    getters
  }, payload) {

    //this works
    const sourceRequest = (countries) => {
      const promisesCollection = [];
      for (const country of countries) {
        promisesCollection.push(this._vm.$axios.get('/sources', {
          params: {
            country,
            language: 'en'
          }
        }));
      }

      return Promise.all(promisesCollection).then(
        responsesArr => [].concat(...responsesArr.map(response => response.data.sources)).map(source => source.id)
      );
    };
    var loadData = (sources, region) => {
      if (sources.length != 0)
        this._vm.$axios.get('/top-headlines', {
          params: {
            sources
          }
        })
        .then(response => {
          commit('setTopInRegions', {
            region,
            data: response.data.articles
          })
        })
      else
        alert('empty source!');
    }

    var asianCountries = ['in', 'ae', 'cn', 'eg', 'hk', 'il', 'jp'];
    var europeanCountries = ['de', 'fr', 'gb', 'gr', 'hu', 'ie', 'it', 'pl', 'pt', 'ru'];
    var africanCountries = ['ng', 'za', 'my'];

    sourceRequest(asianCountries).then((sources) => loadData(sources, 'asia'));
    sourceRequest(europeanCountries).then((sources) => loadData(sources, 'europe'));
    sourceRequest(africanCountries).then((sources) => loadData(sources, 'africa'));



  }
}

function knuthShuffle(arr) {
  arr.forEach((element, index) => {
    if (!element.urlToImage) {
      arr.splice(index, 1);
    }
  });
  var m = arr.length,
    t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  if (arr.length > 0)
    return arr.slice(arr.length - 20);

  return arr;

}

export default {
  state,
  mutations,
  getters,
  actions
}
