var UCFDegreeSearch = function(args) {
  // Default implementations
  this.defaultIdentify = function(data) {
    return data.id;
  };

  this.defaultTransform = function(data) {
    return data;
  };

  this.defaultDisplayKey = function(degree) {
    return jQuery('<span>').html(degree.title.rendered).text();
  };

  this.defaultQueryTokenizer = function(q) {
    return Bloodhound.tokenizers.whitespace(q);
  };

  this.defaultDatumTokenizer = function(datum) {
    return Bloodhound.tokenizers.whitespace(datum.title.rendered);
  };

  this.defaultOnSelect = function(event, obj) {
    window.location = obj.link;
  };

  // Set the object to the provided object, else the jQuery selector
  this.$object = args.selector ? args.selector : $('.degree-search-typeahead');

  this.query_params = this.$object.data('degree-search-params') ? this.$object.data('degree-search-params') : UCF_DEGREE_SEARCH.query_params;

  // Defaults object
  var defaults = {
    limit: this.$object.data('degree-search-count') ? this.$object.data('degree-search-count') : UCF_DEGREE_SEARCH.num_results,
    transform: this.defaultTransform,
    prepare: null,
    identify: this.defaultIdentify,
    displayKey: this.defaultDisplayKey,
    empty: UCF_DEGREE_SEARCH.empty,
    suggestion: UCF_DEGREE_SEARCH.suggestion,
    footer: UCF_DEGREE_SEARCH.footer,
    queryTokenizer: this.defaultQueryTokenizer,
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
  this.prepare = args.prepare;
  this.limit = args.limit;
  this.identify = args.identify;
  this.displayKey = args.displayKey;
  this.empty = args.empty;
  this.suggestion = args.suggestion;
  this.footer = args.footer;
  this.queryTokenizer = args.queryTokenizer;
  this.datumTokenizer = args.datumTokenizer;
  this.onSelect = args.onSelect;

  this.engine = new Bloodhound({
    remote: {
      url: UCF_DEGREE_SEARCH.remote_path + this.query_params,
      transform: this.transform,
      prepare: this.prepare,
      wildcard: '%q'
    },
    queryTokenizer: this.queryTokenizer,
    datumTokenizer: this.datumTokenizer,
    identify: this.identify
  });

  this.$object.typeahead({
    minLength: 3,
    highlight: true
  },
  {
    name: 'degree-search-terms',
    limit: this.limit,
    displayKey: this.displayKey,
    source: this.engine.ttAdapter(),
    templates: {
      notFound: this.empty ? Handlebars.compile(this.empty) : null,
      suggestion: this.suggestion ? Handlebars.compile(this.suggestion) : null,
      footer: this.footer ? Handlebars.compile(this.footer) : null
    },
  }).on('typeahead:selected', function(event, obj) {
    window.location = obj.link;
  }).on('typeahead:asyncreceive', function() {
    jQuery('.tt-menu').scrollTop(0);
  });
};

(function ($) {
  $objects = $('.degree-search-typeahead[data-degree-search-init]');

  if ( $objects.length > 0 ) {
    $objects.each( function($x) {
      new UCFDegreeSearch({
        selector: $x
      });
    });
  }
}(jQuery));
