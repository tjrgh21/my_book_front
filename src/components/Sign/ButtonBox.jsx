import React from "react";
import './Sign.css'

export const ButtonBox = (props) => {
    const {title, onClick} = props

    return(
        <button className="Btn" onClick={onClick}><span>{title}</span></button>
    )
}