import React from 'react';
import style from './Error404.module.css';

export default function Error() {
  return (
    <div className={style.mainContainer}>
      <div className={style.topContainer}>
        <h1>Error 404</h1>
      </div>
      <div className={style.bottomContainer}>
        <button>Volver al Home</button>
      </div>
    </div>
  )
}
