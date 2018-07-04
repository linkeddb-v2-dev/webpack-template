/**
 * Created by PhpStorm.
 * User: admin
 * Date: 2018/7/4
 * Time: 11:44
 */


require('./index.css')

var html = require('html-loader!./index.html')


class Modal{

    constructor(obj){
        this.title = obj.title || '提示';

    }
}

function show(obj) {

    if($('.modal')){
        console.log('111')
    }else {
        console.log('000')
    }
}

/***
 * 模态框
 *
 * @type {{show: *}}
 */
module.exports = {
    show,
}

