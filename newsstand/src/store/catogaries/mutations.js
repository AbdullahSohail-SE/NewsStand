
export function populateGeneralArticles (state,payload) {
  //assigning unique identifiers
  payload.forEach((element,index) => {
    element.id=index;
  });

  state.generalArticles=knuthShuffle(payload);
}

function knuthShuffle(arr) {
  arr.forEach((element, index) => {
    if (!element.urlToImage) {
      arr.splice(index, 1);
    }
  });
  var m = arr.length,
    t, i;
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