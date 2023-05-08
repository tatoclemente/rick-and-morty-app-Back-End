import React from "react";
import style from './Loading.module.css'

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.spinnerContainer}>
        <span className={style.loader}></span>
      </div>
    </div>
  )
};
export default Loading;
