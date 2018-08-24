import * as React from 'react';
// import createHashHistory from 'history'
// const history = createHashHistory()

class Myhead extends React.Component{
    gotoother(a,event){
        console.log(a)
        console.log(window.location.hash)
        // let hash = '#/' + a.key.split(",").join("/");
        if(a==0){
            // history.push('/')
            window.location.hash = '#/news'
        }else{
            // history.push('/data')
            window.location.hash = '#/data'
            console.log(window.location.hash)
        }
        
    }
    render() {
        return (
            <div className="head">
                <div className="headmid">
                    <span className="left" onClick={this.gotoother.bind(this,0)}>新闻</span>
                    <span className="right" onClick={this.gotoother.bind(this,1)}>数据</span>
                </div>
            </div>
        )
    }
}

export default Myhead

