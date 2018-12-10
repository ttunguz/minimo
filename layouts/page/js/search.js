const search = instantsearch({
  appId: '8CMON9E2OR',
  apiKey: '7a16253c06d15fddc6880a9f16cf6cce',
  indexName: 'tomtunguz',
  routing: true
});

search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      empty: 'No results',
      item: '{{{_highlightResult.name.value}}}'
    },
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: '#search-box',
    placeholder: 'Search'
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    maxPages: 20,
    // default is to scroll to 'body', here we disable this behavior
    // scrollTo: false
  })
);

search.start();