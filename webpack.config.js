const path = require('path');
//console.log(path.join(__dirname, 'public', 'scripts'))
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        },
        {
            use: ['style-loader', 'css-loader', 'sass-loader'],
            test: /\.s?css$/
        }
    ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        open: true,
        openPage: '',
        historyApiFallback: true
    }
};