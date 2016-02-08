module.exports = {
	entry: './src/index.js',
	output: {
		path: './build/',
		filename: 'js/index.js',
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,  
			loader: 'babel'
		}]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	}
};
