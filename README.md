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

n/a


## Installation Requirements ##

* typahead.js with bloodhound v0.11.1+ (Can serve from CDN with plugin option)
* angular and angular-route v1.6.4+ (Can serve from CDN with plugin option)
* The angular degree search currently depends on the [Athena Framework](https://github.com/UCF/Athena-Framework) for default styles.


## Development & Contributing ##

NOTE: this plugin's readme.md file is automatically generated.  Please only make modifications to the readme.txt file, and make sure the `gulp readme` command has been run before committing readme changes.

### Wishlist/TODOs ###
* Provide default styles that are not dependent on the Athena Framework.
