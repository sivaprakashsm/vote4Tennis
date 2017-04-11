var config = {
   entry: './server.js',
	
   output: {
      path:require("path").resolve("./"),
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 8080
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   },

   node: {
      net: 'empty',
      tls: 'empty',
      dns: 'empty',
      fs: 'empty'
    }
}

module.exports = config;