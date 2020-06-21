
import { getList } from "../services/api";

export default {
      namespace: 'home', 
      state: {
          likes:null,
          recommends:null
      },
      effects: {
        *getListHttp({ payload }, { call, put }) {  // eslint-disable-line
          const data = yield call(getList,payload);
          yield put({ type: 'getList',payload:data.data});
        },
      },
      reducers: {
        getList(state, action) {
          return { ...state, likes:action.payload.likes,recommends:action.payload.recommends };
        },
      }
    };
    