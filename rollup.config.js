import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";
import babel from '@rollup/plugin-babel'
import pkg from './package.json';

export default [
	// browser-friendly UMD build
	{
		input: 'index.js',
		output: {
			name: 'f',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve(), // so Rollup can find `ms`
			commonjs(), // so Rollup can convert `ms` to an ES module
            babel({ babelHelpers: 'bundled' }),
            terser()
		]
	},

	// CommonJS (for Node) and ES module (for bundlers) build
	{
		input: 'index.js',
        plugins: [terser()],
		external: ['ms'],
		output: [
			{ file: pkg.main, format: 'cjs', exports: 'auto' },
			{ file: pkg.module, format: 'es' }
		]
	}
];