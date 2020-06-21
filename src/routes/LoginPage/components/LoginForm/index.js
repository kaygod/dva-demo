import React,{useEffect} from 'react';
import { connect } from 'dva';
import './style.scss';


function LoginForm(props) {

  const { form } = props;

  const { updateText,loginHandler } = formHandler(props);

  return (
    <div className="login-form">
      <p className="line" >
        <i className="label">用户名:</i>
        <input type="text" placeholder="请输入用户名" 
        value={form.user_name}
        onChange={(e)=>{
          updateText({user_name:e.target.value});
        }}/>
      </p>
      <p className="line" >
      <i className="label" >密码:</i>
      <input type="password" 
      value={form.password}
      placeholder="请输入密码" 
       onChange={(e)=>{
        updateText({password:e.target.value});
      }}
      /></p>
      <p className="btn" ><a className="submmit" onClick={loginHandler}>登录</a>
      </p>
    </div>
  );
}

/**
 * 表单数据和事件处理
 */
function formHandler(props){

  const { dispatch } = props;

  function updateText(data){
    dispatch({
      type:"login/updateForm",
      payload:data
    })
  }

  function loginHandler(){
    dispatch({
      type:"login/loginHttp"
    })
  }

  return {
    updateText,
    loginHandler
  }

}


const mapStateToProps = (state)=>{
   return {
    form:state.login.form
   }
}

export default connect(mapStateToProps)(LoginForm);
