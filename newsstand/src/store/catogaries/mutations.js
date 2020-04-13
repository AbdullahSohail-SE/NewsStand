
export function populateGeneralArticles (state,payload) {
  
  var shuffled=knuthShuffle(payload);
  shuffled.forEach((e,i)=>e.id=i);
  state.generalArticles=shuffled;

  //default selected article is first one
  state.selectedArticle=shuffled[0];
}

export function selectArticle(state,payload){
  state.selectedArticle=payload;
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

  if (arr.length > 20)
    return arr.slice(arr.length - 20);

  return arr;

}