var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template:__dirname+ '/index.html',
    filename:'index.html',
    inject:'body'
    
})

module.exports ={
    entry:[
        "./main.js"
    ],
    output:{
        path: __dirname + 'dist',
        filename:"main-bundle.js"
    },
    module:{
        loaders:[
            {test: /\.js$/, exclude:/node_modules/,loader: "babel-loader"}
        ]
    },
    plugins:[HTMLWebpackPluginConfig]
}