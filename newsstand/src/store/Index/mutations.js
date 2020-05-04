
export function setTopAroundTheGlobe (state, payload) {
  state.topAroundTheGlobe.push(...payload);
}
export function setTopInRegions (state, payload) {
  state.topInRegions[payload.region].push(...knuthShuffle(payload.data));
}
export function setCoronaLatest(state, payload) {
  state.coronaLatest.push(...knuthShuffle(payload));
}

export function clearIndex(state){
  Object.keys(state).forEach(key=>{
    if(Object.keys(state[key]).length == 3)
    {
      let regionArray = state[key];
      Object.keys(regionArray).forEach(k=>{
        regionArray[k].splice(0,regionArray[k].length);
      })
    }
    else
    state[key].splice(0,state[key].length);
  })
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

