var datumTokenizer = function(datum) {
  return Bloodhound.tokenizers.whitespace(datum.title);
};

var objectFilter = function(response) {
  return $.map(response, function(post) {
    return {
      title: post.title.rendered,
      link: post.link,
      post_tags: post.post_tag,
      program_types: post.program_types,
      colleges: post.colleges
    };
  });
};

var ucf_degree_search = function($) {
  var engine = new Bloodhound({
    remote: {
      url: UCF_DEGREE_SEARCH.remote_path + '?filter[s]=%q',
      filter: objectFilter,
      wildcard: '%q'
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: datumTokenizer
  });

  $('.degree-search-typeahead').typeahead({
    minLength: 3,
    highlight: true
  },
  {
    name: 'terms',
    displayKey: function(engine) {
      return engine.title;
    },
    source: engine.ttAdapter(),
    templates: {
      empty: [
        '<div class="empty-message"><p>Unable to find any degrees matching that keyword...</p></div>'
      ]
    }
  });
};

if ( jQuery !== 'undefined' ) {
  jQuery(document).ready(function($) {
    ucf_degree_search($);
  });
}
