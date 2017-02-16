# UCF Degree Search Plugin #

Provides a custom post type, taxonomies and help functions for describing degree programs.


## Description ##

Provides a typeahead search interface for UCF Degrees.


## Installation ##

### Manual Installation ###
1. Upload the plugin files (unzipped) to the `/wp-content/plugins` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the "Plugins" screen in WordPress

### WP CLI Installation ###
1. `$ wp plugin install --activate https://github.com/UCF/UCF-Degree-Search-Plugin/archive/master.zip`.  See [WP-CLI Docs](http://wp-cli.org/commands/plugin/install/) for more command options.


## Changelog ##

#### 0.2.2
* Bug Fixes:
    * Updated to force `tt-menu` to scroll to top when new results are shown.

#### 0.2.1
* Enhancements
  * Added queryTokenizer override.
  * Added prepare override.

#### 0.2.0

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
    
#### 0.1.0

* Initial Commit

## Upgrade Notice ##

n/a


## Installation Requirements ##

* typahead.js with bloodhound v0.11.1+ (Can serve from CDN with plugin option)


## Development & Contributing ##

NOTE: this plugin's readme.md file is automatically generated.  Please only make modifications to the readme.txt file, and make sure the `gulp readme` command has been run before committing readme changes.

### Wishlist/TODOs ###
* Provide simple default templates that can be overridden in the theme.
