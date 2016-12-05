var path = require('path');
var config = {
    context: path.join(__dirname, 'src'),
    entry: "./index.js",

    output: {
        filename: "bundle.js",
        path: __dirname + "/public",
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.scss$/,
                loaders: [ 'style', 'css', 'sass' ]
              }
        ],
    }
};
module.exports = config;