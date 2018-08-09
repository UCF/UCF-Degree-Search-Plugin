# UCF Degree Search Plugin #

Provides a typeahead and angular search interface for UCF Degrees.


## Description ##

Provides a typeahead and angular search interface for UCF Degrees.


## Installation ##

### Manual Installation ###
1. Upload the plugin files (unzipped) to the `/wp-content/plugins` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the "Plugins" screen in WordPress

### WP CLI Installation ###
1. `$ wp plugin install --activate https://github.com/UCF/UCF-Degree-Search-Plugin/archive/master.zip`.  See [WP-CLI Docs](http://wp-cli.org/commands/plugin/install/) for more command options.


## Changelog ##

### 0.6.0 ###
* Enhancements:
    * Adds an additional `form_action` shortcode attribute. This allows the typeahead to submit a GET request to the action url placed in the `form_action` field.
    * Adds dynamic shortcode attributes for adding additional form fields. For example, `form_query_1_name="program-types" `form_query_1_value="doctoral"` will add a hidden input with a name of "program-types" and a value of "doctoral" to the typeahead form.
    * Updated angular search to use html5Mode, which removes the hashbang format of urls. Hashbang urls can - and should - still be used to pass specific filters into a url.
    * Added functionality for passing in various query parameters into a page containing the angular search. The following parameters are now available (some are provided for backward compatibility):
        * `colleges`, i.e. `colleges=arts-humanities`
        * `college[0]`, i.e. `college[0]=arts-humanities`
        * `program_types`, i.e. `program_types=doctoral`
        * `program-type[0]`, i.e. `program-type[0]=doctoral`
        * `search`, i.e. `search=History`
* Bug Fixes:
    * Forces default of typeahead results to 5, instead of 0.

### 0.5.1 ###
* Bug Fixes:
    * Removed Bloodhound prefetching from the degree search typeahead JS until a more suitable utilization of prefetching is found

### 0.5.0 ###
* Enhancements:
    * Added updates for compatibility with UCF-Degree-CPT-Plugin v3.0.0 and the new UCF Search Service

### 0.4.1 ###
* Enhancements:
    * Added a filter for each template so that they can be overridden in themes.
    * Added documentation links into the fields for the Handlebars title and heading.

### 0.4.0 ###
* Enhancements:
    * Added configuration settings for setting the title and heading templates for the Degree Search angular app.
    * Added the `textarea` and `wysiwyg` controls to the config class.
    * Added two custom handlebars helper functions for stripping "degree(s)" and "program(s)" from a program type string (or any string) and to capitalize the first letter of each word within a string.
    * Added `hasFilter` boolean field and logic to set it whenever input or filters change.
    * Added logic for building title and heading using handlebars. If the handlebars template it not set, the default title and heading will be static.

### 0.3.1 ###

* Bug Fixes
    * Added function to handle character encoding issues.

### 0.3.0 ###

* Enhancements:
    * Added an angular degree search. The angular search consists of multiple componenets which can added separately via shortcode for custom layouts.

### 0.2.4 ###

* Bug Fixes:
    * Updated degree suggestion default template to render raw rendered title to help HTML entities display properly.

### 0.2.3 ###

* Bug Fixes:
    * Javascript assets are included on all pages when the option is checked.

### 0.2.2 ###

* Bug Fixes:
    * Updated to force `tt-menu` to scroll to top when new results are shown.

### 0.2.1 ###

* Enhancements
  * Added queryTokenizer override.
  * Added prepare override.

### 0.2.0 ###

* Enhancements:
  * Added a wrapper class for configuring typeahead and bloodound
  * Added configurable options:
    * `limit`: Sets the number of suggestions to display.
    * `transform`: Assigns a function to transform the data.
    * `identify`: Assigns a function to set the identity of each item.
    * `displayKey`: Assigns a function to return the displayKey.
    * `empty`: Assigns the template for no results found.
    * `suggestion`: Assigns the template for each suggestion.
    * `footer`: Assigns the template for the suggestion footer.
    * `datumTokenizer`: Assigns the function that sets each data's queriable token array.
    * `onSelect`: Assigns a function to be run when a suggestion is selected.
  * Added WordPress filters:
    * `ucf_degree_search_empty`: The markup to display when no results are found.
    * `ucf_degree_search_footer`: The markup to display in the suggestions footer.

### 0.1.0 ###

* Initial Commit

## Upgrade Notice ##

### 0.6.0 ###
In version 0.6.0, the angular degree search's "hashbang" urls were replaced with clean urls, which require usage of the HTML5 History API.  Browsers that don't support the HTML5 History API (e.g. IE9 and older) will no longer render the angular degree search correctly.


## Installation Requirements ##

* typeahead.js with bloodhound v0.11.1+ (Can serve from CDN with plugin option)
* angular and angular-route v1.6.4+ (Can serve from CDN with plugin option)
* The angular degree search currently depends on the [Athena Framework](https://github.com/UCF/Athena-Framework) for default styles.
* As of v0.6.0, the angular degree search only supports browsers that support the HTML5 History API.


## Development & Contributing ##

NOTE: this plugin's readme.md file is automatically generated.  Please only make modifications to the readme.txt file, and make sure the `gulp readme` command has been run before committing readme changes.

### Wishlist/TODOs ###
* Provide default styles that are not dependent on the Athena Framework.
