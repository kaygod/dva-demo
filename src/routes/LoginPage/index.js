import React,{useEffect} from 'react';
import { connect } from 'dva';
import './style.scss';
import Header from "../../components/Header";
import LoginForm from "./components/LoginForm";
import LoginState from "./components/LoginState";
import Loading from "../../components/Loading";

function LoginPage(props) {

  const { dispatch,user,loading } = props;

  useEffect(()=>{
    dispatch({
      type:"login/getUser"
    })
  },[])

  return (
    <div className="login-page">
      <Header title="登录页" has_back={true} has_login={false}/>
      {
        user?<LoginState/>:<LoginForm/>
      }
      {loading.global?<Loading/>:false}
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    user:state.login.user,
    loading:state.loading
  }
}

export default connect(mapStateToProps)(LoginPage);
