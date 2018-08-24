import * as React from 'react';
// import createHashHistory from 'history'
// const history = createHashHistory()

class Myfoot extends React.Component{
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
            <div className="foot">
                <p>@copyright zhangjun</p>
            </div>
        )
    }
}

export default Myfoot