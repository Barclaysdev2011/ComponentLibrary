import React from 'react'

interface ButtonProps{
    label:string;
    onClick():void;
}

const Button = (props:ButtonProps) => {
  return (
    <button>{props.label}</button>
  )
}

export default Button;