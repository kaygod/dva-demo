import React from 'react';
import "./style.scss";
import { withRouter } from 'dva/router'

const Header = (props)=>{

    const {title,has_back=false,has_login=true} = props;

    function goBack(){
        props.history.goBack();
    }

    function login(){
        props.history.push("/login");
    }

    return (
        <div className="header">
              {has_back?<a className="back" onClick={goBack}>返回</a>:null} 
              {title}
              {has_login?<a className="login" onClick={login}>登录</a>:null}
        </div>
    );
}

export default withRouter(Header);