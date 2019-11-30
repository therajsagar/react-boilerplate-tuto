const path = require('path')
const HTMLebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                    plugins: ['react-hot-loader/babel']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [new HTMLebpackPlugin({
        template: './src/index.html'
    })]
}