import React from 'react'
import { connect } from 'dva'
// import { getGoods } from '../../service/goods-api'

@connect(
  state=>{
    console.log(state)
    return {
      goodslist:state.goods
    }
  },
  {
    getLists:()=>({type:'/goods/getList'})
  }
)
class Goods extends React.Component{
  componentDidMount() {
    this.props.getLists()
    // console.log(getGoods())
  }
  render() {
    return (
      <div>
       <h1>goods</h1>
        {
          this.props.goodslist ? this.props.goodslist.map(item=>{
           return <div>{item.title}</div>
          }) : 'goodslist不存在'
        }
      </div>
  );
  }
}

export default Goods
