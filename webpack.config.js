var webpack = require('webpack');
module.exports = {
  devtool: 'source-map',
  entry:  [  
       'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack-hot-middleware/client','./src/index.js'
  ],

  output: {
   path: __dirname + "/build",
   filename: 'bundle.js',
/*   /publicPath: 'http://localhost:8080' 
*/  },


  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", 
        query:
          {
            presets:['es2015', 'stage-0','react']
          }
       },
       {     test: /\.css$/,
              loader:'style!css!url'

        },
       {
          test: /\.html$/,
          loader: "file-loader",
        },
        {
          test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          // Limiting the size of the woff fonts breaks font-awesome ONLY for the extract text plugin
          // loader: "url?limit=10000"
          use: "url-loader"
        },
        {
          test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
          use: 'file-loader'
        },
        { test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/
          , loader: 'url?limit=100000&name=[name].[ext]'
        }
    ],
    
  },

//This config only to be used when components interact with models directly

/*   externals: {
    "sequelize": "require('sequelize')"
  },
*/   devServer: {
        publicPath: "/",
        contentBase: "./public",
        hot: true
    },

      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
