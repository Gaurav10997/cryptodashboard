import React from 'react'
import "./styles.css"
function Button({title,outline}) {
  return (
    <div className={outline?'outline_btn':'btn'} >{title}</div>
  )
}

export default Button