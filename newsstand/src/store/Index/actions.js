

export function LoadTopAroundTheGlobe({
  commit
}) {

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
      .then(response => {
        assignIds(response.data.articles, 'topAroundTheGlobe');
        commit('setTopAroundTheGlobe', response.data.articles)
      })
  }

  fetchEnglishSources().then(populateTopAroundTheGlobe);

}
export function LoadCoronaLatest({
  commit
}) {

  this._vm.$axios.get('/everything', {
      params: {
        q: 'coronavirus',
        sortBy: 'popularity',
        language: 'en'
      }
    })
    .then((response) => {
      assignIds(response.data.articles, 'coronavirusLatest');
      commit('setCoronaLatest', response.data.articles);
    })

}
export function LoadRegionsLatest({
  commit
}) {

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
        assignIds(response.data.articles, region + 'Latest');
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

function assignIds(arr, category) {
  arr.forEach((article, i) => {
    article.id = i;
    article.category = category;
  })
}