/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/7/5
 * Time: 18:49
 */


var express = require('express')

var app = express();

app.use(express.static('dist'));

var server = app.listen(3000, function () {

    console.log('websit');
});

