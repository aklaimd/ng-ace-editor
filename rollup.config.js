import angular from 'rollup-plugin-angular';
import typescript from 'rollup-plugin-typescript2';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
	input: 'dist/index.js',
	output: {
		file: 'dist/bundles/ng-ace-editor.js',
		format: 'cjs',
		name: 'ng.ng2aceeditor',
		sourcemap: false,
		globals: {
			'@angular/core': 'ng.core',
			'@angular/forms': 'ng.forms'
		}
	},
	external: ['@angular/core', '@angular/forms', 'brace', 'brace/theme/monokai'],
	plugins: [angular(), typescript()]
};
