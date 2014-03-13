var koa = require('koa');
var route = require('koa-route');

var index = require('./routes/index');

var app = koa();

app.use(route.get('/', index.get));

app.listen(3000);
