require('./index.css');

import html from 'html-loader!./index.html'

class Modal{

  constructor(obj){
    this.title = obj.title || '提示';

  }
}

function show(obj) {

  if($('.modal')){
    console.log('111');
  }else {
    console.log('000');
  }
}

/***
 * 模态框
 *
 * @type {{show: *}}
 */
export {
  show,
};
