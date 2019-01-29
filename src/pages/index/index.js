/* css模块测试  引入common.css  引入自己css */
import './index.less'

/* js模块测试 引入assets  引入component  */
import template from '../../assets/vendor/template-web/template-web'
import {test} from '../../assets/utils/util.js';
test(5);

/* 模板引擎测试 */
let htmlStr = '<span style="color: green">{{str}}</span>';
let render = template.compile(htmlStr);
let html = render({str:'这是一段模板引擎生成的html'});
$('#template').html(html);

console.log('index');
