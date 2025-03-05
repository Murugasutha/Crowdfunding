import React from 'react'
import style from '../components/style/Title.module.css';

function Title({title, subtitle, theme}) {
  return (
    <div className={`${style.title} ${theme === "dark"? style.dark : ''}`}>
        <p>{subtitle}</p>
        <h1>{title}</h1>
    </div>
  )
}

export default Title;
