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
      // https://caniuse.com/#feat=template-literals
      item: '<div class="my-3"><h3><a href="{{ .Permalink }}">{{{ _highlightResult.title.value }}}</a></h3><div><span class="text-secondary">{{ lastmod_date }}</span> <span class="text-secondary">∙ {{ tags_text }}</span> {{#_highlightResult.description.value}}∙ {{ _highlightResult.description.value }}{{/_highlightResult.description.value}}</div><small class="text-muted">{{ summary }}</small></div>'
    },
    transformData: {
      item: function(data) {
        data.lastmod_date = new Date(data.lastmod*1000).toISOString().slice(0,10)
        // https://caniuse.com/#search=MAP
        const tags = data.tags.map(function(value) {
          return value.toLowerCase().replace(' ', '-')
        })
        data.tags_text = tags.join(', ')
        return data
      }
    }
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