import React,{useEffect} from 'react';
import { connect } from 'dva';
import './style.scss';
import Header from "../../components/Header";

function DetailPage(props) {

  const { dispatch,match,product_data } = props;

  useEffect(()=>{
    const { id } = match.params;
    dispatch({
      type:"detail/getDataHttp",
      payload:{
        id
      }
    })
  },[])

  if(!product_data){
    return null;
  }

  return (
    <div className="detail-page">
      <Header title="详情页" has_back={true}/>   
      <div className="item">
        <p className="item_top box">
          <i className="lt">id</i>
          <i className="gt">{product_data.id}</i>
        </p>
      </div>
      <div className="item">
        <p className="item_top box">
          <i className="lt">名称</i>
          <i className="gt">{product_data.name}</i>
        </p>
      </div>
      <div className="item">
        <p className="item_top box">
          <i className="lt">数量</i>
          <i className="gt">{product_data.count}</i>
        </p>
      </div>
      <div className="item">
        <p className="item_top box">
          <i className="lt">价格</i>
          <i className="gt">{product_data.price}</i>
        </p>
      </div>
      <div className="item high">
        <p className="item_top box">
          <i className="lt">照片</i>
          <i className="gt"><img src={product_data.img}/></i>
        </p>
      </div>
      <div className="item high">
        <p className="item_top box">
          <i className="lt">描述</i>
          <i className="gt">{product_data.desc}</i>
        </p>
      </div>
    </div>
  );
}

const mapStateToProps = (state)=>{
  return {
    product_data:state.detail.product_data
  }
}

export default connect(mapStateToProps)(DetailPage);
