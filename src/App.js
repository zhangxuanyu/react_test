import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';//react-dom
import MyRequest from './request.js'//自己封装的请求
import $ from 'jquery'//引入jquery
import MyRouter from './router.js';//自己封装的路由
import Myhead from './compontent/myhead.js';//头
import Myfoot from './compontent/myfoot.js';//脚


class App extends Component {
  init = () => { //组件的一些初始化操作
		window.addEventListener('hashchange', () => { //监听hash
			this.hashChange();
		});
	};

  hashChange = () => {//hash改变，加载对应的组件
		if(window.location.hash == '') window.location.hash = '/news';//默认首页
			this.refresh();
  };


  refresh = () => {//刷新内容
    // ReactDOM.render(<div>111</div>,document.getElementById('main')); 
    let hash = window.location.hash.split('=')[0];
    /*React.myParam.setParam(//把路由参数存起来
      Qs.parse(window.location.hash.split('?')[1])
    );*/
    let $myRouter = MyRouter[hash];//拿到当前hash对用的组件
    if($myRouter != undefined) {
      
        setTimeout((main = 'main') => { //延迟0.1秒
          ReactDOM.render($myRouter.compontent(), document.getElementById(main));
        },100);
      
    } else {
      setTimeout((main = 'main') => { //延迟0.1秒
        ReactDOM.render(<div>路由解析异常</div>,document.getElementById(main));
      },100);
       
    } 
  }

  componentWillMount() {
    //按照路由渲染组件-->让后台知道
    this.init();
    this.hashChange();
  }
  componentDidMount() {
    /*jquery监听顶部滚动*/
    // $('#main').scroll(()=>{
    //    let width = $('#main').scrollTop() / ($('#main')[0].scrollHeight-$('#main')[0].clientHeight) ;
    //    $('.progress').css({
    //      width:width*100+'%'
    //    });
    // });
  };
  render() {
    

    return (
      <div>
          <Myhead/>
          <div id='main' style={{minHeight:'800px'}}>1111</div>
          <Myfoot/>
      </div>
    );
  }
}

export default App;
