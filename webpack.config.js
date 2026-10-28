/**
 * Block build config: the @wordpress/scripts defaults, with one change.
 *
 * The root .babelrc belongs to the older minified builds in src/js.
 * @wordpress/scripts would use it for blocks too, which drops the
 * TypeScript and JSX support blocks need. Here the blocks get the
 * WordPress Babel preset and ignore .babelrc.
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );

function useWordPressBabel( rule ) {
	for ( const use of [].concat( rule.use ?? [] ) ) {
		if ( typeof use === 'object' && String( use.loader ).includes( 'babel-loader' ) ) {
			use.options = {
				...use.options,
				babelrc: false,
				configFile: false,
				presets: [ require.resolve( '@wordpress/babel-preset-default' ) ],
			};
		}
	}
	return rule;
}

module.exports = {
	...defaultConfig,
	module: {
		...defaultConfig.module,
		rules: defaultConfig.module.rules.map( useWordPressBabel ),
	},
};
