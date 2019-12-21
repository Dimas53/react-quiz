import React from "react";
import cls from './Backdrop.module.sass'

const Backdrop = props =>
  <div className={cls.Backdrop} onClick={props.onClick} />

export default Backdrop