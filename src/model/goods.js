// import { getGoods } from '../../service/goods-api'
import axios from 'axios'

function getGoods() {
    return axios.get('/api/goods')
}
export default {
  state: [],
  effects: {
    *getList(action, {call, put}){
      console.log(111)
      const res = yield call(getGoods)
      yield put({type:'initstate', payload: res.data.res})
    }
  },
  reducers: {
    initstate (state,action) {
      console.log('reducers',state,action)
      return action.payload
    }
  }
}
