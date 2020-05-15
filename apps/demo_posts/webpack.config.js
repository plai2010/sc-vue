const fs = require('fs');
const path = require('path');

const appName = path.basename(__dirname);
const bootVar = 'pl2010_vue_init_' + appName;

const wrapper = path.resolve(__dirname, 'tmp-wrapper.js');
fs.writeFile(
	wrapper,
	"import init from './app.js'; " + bootVar + " = init;"
);

module.exports = (env, argv) => ({
	mode: argv.mode || 'production',
	entry: wrapper,
	output: {
		path: path.resolve(__dirname),
		filename: 'index.js',
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
			},
		],
	},
});

// vim: set ts=2 noexpandtab fdm=marker:
