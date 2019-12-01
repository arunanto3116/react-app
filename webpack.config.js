var path    = require('path');
var hwp     = require('html-webpack-plugin');

var config = {
    devtool: "source-map",
    entry: path.join(__dirname, './src/App.js'),
    output: {
        filename: 'build.js',
        path: path.join(__dirname, './dist')
    },
    resolve: {
        modules: [path.join(__dirname, 'node_modules')]
    },
    resolveLoader: {
        modules: [path.join(__dirname, 'node_modules')]
    },
    module:{
        rules: [{
            test: /.js?$/,
            loader: require.resolve("babel-loader"),
            exclude: /node_modules/,
            options: {
                presets: ['@babel/preset-env','@babel/preset-react'],
                plugins: ["transform-es2015-modules-amd", "syntax-dynamic-import", "transform-class-properties"]
            }
        },
        {
            test: /.(sass|scss|css)$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader"
            }]
        },
        {
            test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            loader: 'file-loader?limit=100000'
        }]
    },
    plugins:[
        new hwp({template:path.join(__dirname, './src/index.html')})
    ]
};

module.exports = config;