'use strict'

var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
		},
		{
		    test: /\.css$/,
		    loader: ExtractTextPlugin.extract(
		        'style-loader',
		        'css-loader',
		        {
		            publicPath: '../',  // 回到dist，像是 background-image: url(../img/header-e147da.jpg); 就是由這控制的
		            // publicPath: path.join(__dirname, 'dist'),  // 絕對路徑是要不得的作法，你可以看你我用筆電看到的結果 -> background-image: url(D:\develop\kkdev\showcase\distimg/header-e147da.jpg);
		        }
		    )
		},
		{
		    test: /\.css$/,
		    loader: 'postcss-loader'
		}]
	},
	resolve: {
		extensions: ['', '.css', '.js', '.jsx']
	},
	postcss: function () {
	    // return [ require('autoprefixer'), require('precss'), require('postcss-fontpath'), require("postcss-calc"), require("postcss-color") ];
	    return [ require('autoprefixer')({browsers: ['> 1%', 'IE 7']}), require('precss') ];
	},
	plugins: [
	    // new HtmlPack({ 
	    //   title: 'SWAROVSKI',// 在這設定的變數，可在template.html中用 {%= o.htmlWebpackPlugin.options.title %} 帶入
	    //   filename: 'index.html', // 輸出的檔名是什麼
	    //   template: './src/swarovski/index.html',
	    //   inject: 'body' // 檔案會從輸出的index.html的哪裡link入
	    // }),
	    new ExtractTextPlugin('css/index.css')
	]
};
