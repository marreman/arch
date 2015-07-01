module.exports = {
	entry: "./src/browser.js",
	output: {
		path: __dirname,
		filename: "public/app.js"
	},
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css" },
			{ test: /\.js$/, loader: "jsx-loader" }
		]
	}
};
