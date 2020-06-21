import React from 'react';
import { connect } from 'dva';
import './style.scss';


function LoginState(props) {

  function logout(){
    props.dispatch({
      type:"login/loginOut"
    })
  }

  const { user_name } = props.user;

  return (
    <div className="login-state">
      <div className="tag">{user_name}殿下,欢迎您登录!</div>
      <p className="btn">
       <a className="submmit" onClick={logout}>退出登录</a>
      </p>
    </div>
  );
}

const mapStateToProps = (state)=>{
 return {
  user:state.login.user
 }
}

export default connect(mapStateToProps)(LoginState);
