var UCFDegreeSearch = function(args) {
  // Default implementations
  this.defaultIdentify = function(data) {
    return data.id;
  };

  this.defaultTransform = function(data) {
    return data;
  };

  this.defaultDisplayKey = function(degree) {
    return degree.title.rendered;
  };

  this.defaultDatumTokenizer = function(datum) {
    return Bloodhound.tokenizers.whitespace(datum.title.rendered);
  };

  this.defaultOnSelect = function(event, obj) {
    window.location = obj.link;
  };
  
  // Defaults object
  var defaults = {
    transform: this.defaultTransform,
    identify: this.defaultIdentify,
    displayKey: this.defaultDisplayKey,
    empty: UCF_DEGREE_SEARCH.empty,
    suggestion: UCF_DEGREE_SEARCH.suggestion,
    footer: UCF_DEGREE_SEARCH.footer,
    datumTokenizer: this.defaultDatumTokenizer,
    onSelect: this.defaultOnSelect
  };

  // Make sure args is an object
  args = args ? args : {};

  for(var attr in defaults) {
    if ( typeof args[attr] === 'undefined' || args[attr] === null ) {
      args[attr] = defaults[attr];
    }
  }

  this.transform = args.transform;
  this.identify = args.identify;
  this.displayKey = args.displayKey;
  this.empty = args.empty;
  this.suggestion = args.suggestion;
  this.footer = args.footer;
  this.datumTokenizer = args.datumTokenizer;
  this.onSelect = args.onSelect;

  this.engine = new Bloodhound({
    prefetch: {
      url: UCF_DEGREE_SEARCH.remote_path + '?filters[posts_per_page]=-1',
      transform: this.transform
    },
    remote: {
      url: UCF_DEGREE_SEARCH.remote_path + UCF_DEGREE_SEARCH.query_params,
      transform: this.transform,
      wildcard: '%q'
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    datumTokenizer: this.datumTokenizer,
    identify: this.identify
  });

  var $degree = $('.degree-search-typeahead').typeahead({
    minLength: 3,
    highlight: true
  },
  {
    name: 'degree-search-terms',
    displayKey: this.displayKey,
    source: this.engine.ttAdapter(),
    templates: {
      empty: this.empty ? Handlebars.compile(this.empty) : null,
      suggestion: this.suggestion ? Handlebars.compile(this.suggestion) : null
    },
    footer: this.footer ? Handlebars.compile(this.footer) : null
  }).on('typeahead:selected', function(event, obj) {
    window.location = obj.link;
  });
};

if ( jQuery !== 'undefined' ) {
  jQuery(document).ready(function($) {
    if (UCF_DEGREE_SEARCH.auto_initialize) {
      new UCFDegreeSearch();
    }
  });
}
