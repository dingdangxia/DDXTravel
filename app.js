var express = require('express');
var proxy = require('http-proxy-middleware'); 


var app = express();
app.use(express.static('dist'))
app.use(
    '/api',
    proxy({ target: 'https://m.youxiake.com', changeOrigin: true,pathRewrite: {
            '^/api': ''  
          }, })
);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

// app.get('/', (req, res) => {
//     res.send('centOS服务器下，使用nodejs提供服务')
// })
app.listen(8800);