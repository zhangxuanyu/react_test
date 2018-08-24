import * as React from 'react';

class News extends React.Component {
    componentDidMount() { //类似mounted
		let that = this;
        // postreq('http://service.dappdata.io/eos/rank',{ "page":1,"timestamp":1534953600,"order_by":'total',"category":"total"})
        fetch('http://service.dappdata.io/eos/rank', {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded' // 指定提交方式为表单提交
                  }),
                body: JSON.stringify({ "page":1,"timestamp":1534953600,"order_by":'total',"category":"total"}) // 这里是请求对象
            })
            .then((res)=>{
                console.log(res)
                return res.json()
            })
            .then((res)=>{
                console.log(res)
            })
	};
    render(){
        return (
            <div>
                <p>news</p>
                <p>新闻</p>

            </div>
        )
    }
}

export default News;