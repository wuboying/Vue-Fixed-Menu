module.exports = {
  lintOnSave: false,
  publicPath: './',
  devServer: {
    open: process.platform === 'darwin',
    host: '0.0.0.0',
    port: 14000,
    https: false,
    hotOnly: false,
    before: app => { },
    proxy: {
      '/baseAlarm': {
        target: 'http://192.168.6.9:5565',//王超
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/baseAlarm': ''   //需要rewrite的,
        }
      },
      '/commonApi': {
        target: 'http://192.168.6.16:8198',//劳一峰
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/commonApi': ''   //需要rewrite的,
        }
      },
	  '/standardApi': {
	    target: 'http://192.168.6.16:8198',//劳一峰
	    ws: true,
	    changeOrigin: true,
	    pathRewrite: {
	      '^/standardApi': ''   //需要rewrite的,
	    }
	  }
    }

  },
}
