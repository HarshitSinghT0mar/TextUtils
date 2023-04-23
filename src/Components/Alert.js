import React from "react";

function Alert(props) {
  return (
    <div style={{height: '40px'}}>
   {props.alert && <div className="alert alert-success d-flex align-items-center" role="alert">
      <div>{props.alert}</div>
    </div>}
    </div>
  )
}

export default Alert;
