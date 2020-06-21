import React,{useEffect} from 'react';
import { connect } from 'dva';
import './style.scss';
import Header from "../../components/Header";
import Product from "./components/Product";

function HomePage(props) {
  
  useEffect(()=>{
    const {dispatch} = props;
    dispatch({
      type:"home/getListHttp",
      payload:{}
    })
  },[])

  const { likes = null,recommends = null } = props;

  if(!likes || !recommends){
    return null;
  }

  return (
    <div className="home-page">
      <Header title="首页"/>
      <Product data={likes}/>
      <Product data={recommends}/>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    likes:state.home.likes,
    recommends:state.home.recommends
  }
}

export default connect(mapStateToProps)(HomePage);
