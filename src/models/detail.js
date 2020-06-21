
import { getProductData } from "../services/api";

export default {
      namespace: 'detail', 
      state: {
           product_data:null 
      },
      effects: {
        *getDataHttp({ payload }, { call, put }) {  // eslint-disable-line
          const data = yield call(getProductData,payload);
          yield put({ type: 'getData',payload:data.data});
        },
      },
      reducers: {
        getData(state, action) {
          return { ...state, product_data:action.payload};
        },
      }
};
    