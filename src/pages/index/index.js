


/* css模块测试  引入common.css  引入自己css */
require('../../components/common.css')
require('./index.css');

/* js模块测试 引入assets  引入component  */
const template = require('../../assets/js/template-web');
import {test} from '../../components/util.js';
test(5);


/* 模板引擎测试 */
var htmlStr = '<span style="color: green">{{str}}</span>';
var render = template.compile(htmlStr);
var html = render({str:'这是一段模板引擎生成的html'});
$('#template').html(html);


console.log('index')

