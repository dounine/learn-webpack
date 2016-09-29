var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
module.exports = {
	entry:"./src/app.js",
	output:{
		path:'./bin',
		filename:'app.bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader: "babel", 
				query:
					{
						presets:['react']
					}
			},
			{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=800192'}
		]
	},
	plugins: [commonsPlugin]
}