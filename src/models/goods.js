// import { getGoods } from '../../service/goods-api'
import axios from 'axios'

function getGoods() {
    return axios.get('/api/goods')
}
export default {
  namespace: 'goods',
  state: [{title:'ng',id:1003}],
  effects: {
    *getList(action, {call, put}){
      console.log(111)
      const res = yield call(getGoods)
      yield put({type:'initGoods', payload: res.data.res})
    }
  },
  reducers: {
    initGoods (state,action) {
      console.log('reducers',state,action)
      return action.payload
    },
    addGoods (state,action) {
      console.log(action)
      return [...state,{title:action.payload.title,id:action.payload.id}]
    }
  }
}
