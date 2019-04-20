console.log(__dirname + '/src');
var config = {
    context: __dirname + '/src',
    entry: {
        app: './lib/app.js'
    },
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /nodule_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.svg$/, 
                include: /lib/,
                loader: 'svg-inline-loader'
            }
        ]
    }
}

module.exports = config;