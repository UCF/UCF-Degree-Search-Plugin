var datumTokenizer = function(datum) {
  return Bloodhound.tokenizers.whitespace(datum.title.rendered);
};

var ucfDegreeSearch = function($) {
  var engine = new Bloodhound({
    remote: {
      url: UCF_DEGREE_SEARCH.remote_path + UCF_DEGREE_SEARCH.query_params,
      wildcard: '%q'
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: datumTokenizer
  });

  engine.initialize();

  $('.degree-search-typeahead').typeahead({
    minLength: 3,
    highlight: true
  },
  {
    name: 'terms',
    displayKey: function(engine) {
      return engine.title.rendered;
    },
    source: engine.ttAdapter(),
    templates: {
      empty: [
        '<div class="empty-message"><p>Unable to find any degrees matching that keyword...</p></div>'
      ],
      suggestion: Handlebars.compile(UCF_DEGREE_SEARCH.suggestion)
    }
  }).on('typeahead:selected', function(event, obj) {
    window.location = obj.link;
  });
};

if ( jQuery !== 'undefined' ) {
  jQuery(document).ready(function($) {
    ucfDegreeSearch($);
  });
}
