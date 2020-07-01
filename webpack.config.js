const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");
const WorkerPlugin = require("worker-plugin");

module.exports = {
	mode: "production",
	plugins: [
		new webpack.ProgressPlugin(),
		new HtmlWebpackPlugin({template: "index.html"}),
		new workboxPlugin.GenerateSW({
			swDest: "sw.js",
			clientsClaim: true,
			skipWaiting: false,
		}),
		new WorkerPlugin(),
	],
	module: {
		rules: [],
	},
	devServer: {
		open: true,
	},
	optimization: {
		minimizer: [new TerserPlugin()],
		splitChunks: {
			chunks: "all",
		},
	},
};
