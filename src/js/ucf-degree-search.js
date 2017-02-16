var datumTokenizer = function(datum) {
  return Bloodhound.tokenizers.whitespace(datum.title.rendered);
};

var identifyById = function(data) {
  return data.id;
};

var scoreSorter = function(a, b) {
  if (a.score < b.score) {
    return 1;
  }
  if (a.score > b.score) {
    return -1;
  }
  return 0;
};

var addMeta = function(data) {
  var q = $('.tt-input').val().toLowerCase();
  var exactMatch = new RegExp('\\b' + q + '\\b', 'i');
  var partialMatch = new RegExp(q, 'i');

  for(var d in data) {
    var result = data[d],
        score  = 0,
        matchString = '',
        titleExactMatch = (exactMatch.exec(result.title.rendered) !== null),
        titlePartialMatch = (partialMatch.exec(result.title.rendered) !== null);

    score += titleExactMatch ? 50 : 0;
    score += titlePartialMatch && ! titleExactMatch ? 10 : 0;

    for(var x in result.program_types) {
      var pt = result.program_types[x],
          ptWholeMatch = (exactMatch.exec(pt.name) !== null),
          ptPartialMatch = (partialMatch.exec(pt.name) !== null);

      score += ptWholeMatch ? 25 : 0;
      score += ptPartialMatch && (!ptWholeMatch) ? 10 : 0;

      if (ptWholeMatch || ptPartialMatch) {
        matchString = "(Program Type: " + pt.name + ")";
      }
    }

    for(var y in result.career_paths) {
      var cp = result.career_paths[y],
          cpWholeMatch = (exactMatch.exec(cp.name) !== null),
          cpPartialMatch = (partialMatch.exec(cp.name) !== null);

      if (cpWholeMatch || cpPartialMatch) {
        matchString = "(Career Opportunity: " + cp.name + ")";
      }
    }

    result.score = score;
    result.matchString = matchString;
  }

  data.sort(scoreSorter);

  return data;
};

var ucfDegreeSearch = function($) {
  var engine = new Bloodhound({
    prefetch: {
      url: UCF_DEGREE_SEARCH.remote_path + '?filters[posts_per_page]=-1',
      transform: addMeta
    },
    remote: {
      url: UCF_DEGREE_SEARCH.remote_path + UCF_DEGREE_SEARCH.query_params,
      transform: addMeta,
      wildcard: '%q'
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: datumTokenizer,
    identify: identifyById
  });

  $('.degree-search-typeahead').typeahead({
    minLength: 3,
    highlight: true
  },
  {
    name: 'terms',
    limit: UCF_DEGREE_SEARCH.num_results,
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
