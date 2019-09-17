import React from 'react'
import { connect } from 'dva'
import { Button } from 'antd';

@connect(
  state=>{
    console.log(state)
    return {
      goodslist:state.goods,
      loadflag:state.loading.global
    }
  },
  {
    getList:()=>({type:"goods/getList"}),
    add:(obj)=>{
      return {type:"goods/addGoods",payload:{...obj}}
    }
  }
)

class Goods extends React.Component{
  componentDidMount() {
    this.props.getList()
    // console.log(getGoods())
  }
  render() {
    if (this.props.loadflag) {
      return (<div>加载中</div>)
    }
    return (
      <div>
        <h1>goods</h1>
        {
          this.props.goodslist ? this.props.goodslist.map(item=>{
            return <div key={item.id}>{item.title}</div>
          }) : 'goodslist不存在'
        }
        <Button type="primary" onClick={()=>{this.props.add({title:'success'+Date.now(),id:Date.now()})}}>add</Button>
      </div>
    );
  }
}

export default Goods

