
import { login } from "../services/api";

export default {
      namespace: 'login', 
      state: {
           user:null,
           form:{
               user_name:"",
               password:""
           }
      },
      effects: {
        *loginHttp(action, { call, put, select }) {  // eslint-disable-line
          const form = yield select(state => state.login.form);
          const data = yield call(login,form);
          yield put({ type:'loginHandler',payload:data.data});
        },
      },
      reducers: {
        updateForm(state,action){ //更新表单数据
            return {
                ...state,
                form:{
                    ...state.form,
                    ...action.payload
                }
            }
        },  
        loginOut(state){ //登出
            localStorage.removeItem("user");
            return {...state,user:null};
        },  
        getUser(state,action){ //获取用户信息
            const user = localStorage.getItem("user");
            if(user){
                return {...state,user:JSON.parse(user)};
            }
            return state;
        },  
        loginHandler(state, action) { //登录操作
          localStorage.setItem("user",action.payload?JSON.stringify(action.payload):null);  
          return { ...state,user:action.payload};
        },
      }
};
    