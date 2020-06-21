import React from 'react';
import { connect } from 'dva';
import './style.scss';
import { withRouter } from 'dva/router'

function Product(props) {

  const { title,data } = props.data;

  const { jumpHandler } = jump(props);

  return (
    <div className="product">
      <p className="title">{title}</p>
      {
        data.map((item)=>{
          return (
            <div className="item" key={item.id} onClick={()=>{jumpHandler(item.id)}}>
              <p className="item_top box">
              <i className="lt">{item.name}</i>
              <i className="gt">{item.price}</i></p>
              <p className="item_bottom">{item.desc}</p>
            </div>
          )
        })
      }
    </div>
  );
}

/**
 * 页面跳转的相关处理
 */
function jump(props){
 
  function jumpHandler(id){
    props.history.push(`/detail/${id}`);
  }

  return {
    jumpHandler
  }

}


export default withRouter(connect()(Product));
