const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports= {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        hot: true,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My webpack app",
            filename: "index.html",
            template: "src/template.html",
        }),
    ],
}
//brackets refer to property inside of entry object